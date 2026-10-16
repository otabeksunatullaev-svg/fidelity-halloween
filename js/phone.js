/* Номер телефона: маска +998 (90) 123-45-67 для Узбекистана и свободный формат «+код номер» для других стран.
   Курсор не прыгает в конец при правке в середине, Backspace перешагивает скобки и дефисы. */
(function (FDL) {
  'use strict';

  const UZ = '998';
  const UZ_LOCAL = 9;      // цифр после +998
  const INTL_MIN = 8;
  const INTL_MAX = 15;     // максимум по E.164

  const onlyDigits = (s) => String(s || '').replace(/\D/g, '');

  /**
   * Разбирает ввод. Возвращает kind ('uz' или 'intl'), все цифры номера с кодом страны
   * и added: сколько цифр мы дописали сами (код 998 к местному номеру), это нужно для позиции курсора.
   */
  function parse(raw) {
    const value = String(raw || '').trim();
    const digits = onlyDigits(value);
    const plus = value.charAt(0) === '+';

    if (!digits) return { kind: 'uz', digits: '', added: 0, plus };
    if (plus) {
      const uz = digits.startsWith(UZ) || UZ.startsWith(digits);
      return { kind: uz ? 'uz' : 'intl', digits: digits.slice(0, uz ? UZ.length + UZ_LOCAL : INTL_MAX), added: 0, plus };
    }
    if (digits === UZ || (digits.startsWith(UZ) && digits.length > UZ_LOCAL)) {
      return { kind: 'uz', digits: digits.slice(0, UZ.length + UZ_LOCAL), added: 0, plus };
    }
    // Без «+» и без кода страны: считаем, что ввели местный номер
    return { kind: 'uz', digits: (UZ + digits).slice(0, UZ.length + UZ_LOCAL), added: UZ.length, plus };
  }

  function formatUz(digits) {
    if (digits.length < UZ.length) return '+' + digits;
    const local = digits.slice(UZ.length);
    let out = '+' + UZ;
    if (local.length) out += ' (' + local.slice(0, 2);
    if (local.length > 2) out += ') ' + local.slice(2, 5);
    if (local.length > 5) out += '-' + local.slice(5, 7);
    if (local.length > 7) out += '-' + local.slice(7, 9);
    return out;
  }

  /** Приводит ввод к виду для показа: «+998 (90) 123-45-67» или «+77011234567». */
  function format(raw) {
    const p = parse(raw);
    let value;
    if (!p.digits) value = p.plus ? '+' : '';
    else value = p.kind === 'uz' ? formatUz(p.digits) : '+' + p.digits;
    return { value, digits: p.digits, kind: p.kind, added: p.added };
  }

  function isValid(raw) {
    const p = parse(raw);
    if (p.kind === 'uz') return p.digits.length === UZ.length + UZ_LOCAL;
    return p.digits.length >= INTL_MIN && p.digits.length <= INTL_MAX;
  }

  /** Пустой ли номер: ничего не введено или осталась только подставленная подсказка +998. */
  function isEmpty(raw) {
    const d = parse(raw).digits;
    return !d || d === UZ;
  }

  /* Позиция в строке сразу после n-й цифры */
  function caretAfterDigits(str, n) {
    if (n <= 0) return str.charAt(0) === '+' ? 1 : 0;
    let seen = 0;
    for (let i = 0; i < str.length; i++) {
      if (/\d/.test(str[i]) && ++seen === n) return i + 1;
    }
    return str.length;
  }

  /* Переформатирует поле, сохраняя курсор после той же цифры */
  function apply(input) {
    const caret = input.selectionStart == null ? input.value.length : input.selectionStart;
    const before = onlyDigits(input.value.slice(0, caret)).length;
    const res = format(input.value);
    input.value = res.value;
    if (document.activeElement === input) {
      const pos = caretAfterDigits(res.value, before + res.added);
      input.setSelectionRange(pos, pos);
    }
  }

  /* Backspace и Delete на скобке, пробеле или дефисе удаляют ближайшую цифру, а не разделитель */
  function onBeforeInput(e) {
    const input = e.target;
    const { selectionStart: start, selectionEnd: end, value } = input;
    if (start !== end) return;

    let i = -1;
    if (e.inputType === 'deleteContentBackward' && start > 0 && /\D/.test(value[start - 1])) {
      i = start - 1;
      while (i >= 0 && /\D/.test(value[i])) i--;
    } else if (e.inputType === 'deleteContentForward' && start < value.length && /\D/.test(value[start])) {
      i = start;
      while (i < value.length && /\D/.test(value[i])) i++;
      if (i >= value.length) i = -1;
    }
    if (i < 0) return;

    e.preventDefault();
    input.value = value.slice(0, i) + value.slice(i + 1);
    input.setSelectionRange(i, i);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /* Вставленный целиком номер заменяет подсказку +998, а не дописывается к ней */
  function onPaste(e) {
    const text = (e.clipboardData || window.clipboardData).getData('text');
    if (onlyDigits(text).length < UZ_LOCAL) return;
    e.preventDefault();
    e.target.value = text;
    e.target.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /** Подключает маску к полю ввода. */
  function attach(input) {
    input.addEventListener('focus', () => {
      if (input.value) return;
      input.value = '+' + UZ + ' ';
      requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
    });
    input.addEventListener('blur', () => {
      if (isEmpty(input.value)) input.value = '';
    });
    input.addEventListener('beforeinput', onBeforeInput);
    input.addEventListener('paste', onPaste);
    input.addEventListener('input', () => apply(input));
  }

  FDL.phone = { parse, format, isValid, isEmpty, attach };
})(window.FDL);
