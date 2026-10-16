/* Правила полей формы и нормализация значений перед отправкой.
   Каждое правило получает строку и возвращает текст ошибки или пустую строку, если всё в порядке. */
(function (FDL) {
  'use strict';

  /* Ник Telegram: латиница, цифры и _, начинается с буквы, от 4 до 32 символов */
  const TG_RE = /^[a-z][a-z0-9_]{3,31}$/i;

  const clean = (v) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim();

  /* Принимает «@nick», «nick», «t.me/nick» и «https://t.me/nick», возвращает просто «nick» */
  function telegramHandle(v) {
    return clean(v)
      .replace(/^https?:\/\//i, '')
      .replace(/^(www\.)?(t|telegram)\.me\//i, '')
      .replace(/^@+/, '')
      .replace(/[/?#].*$/, '');
  }

  const rules = {
    name(v) {
      const s = clean(v);
      if (!s) return 'Напишите, как вас зовут';
      if (s.split(' ').length < 2) return 'Нужны имя и фамилия';
      return '';
    },
    position(v) {
      return clean(v).length >= 2 ? '' : 'Укажите должность';
    },
    company(v) {
      return clean(v).length >= 2 ? '' : 'Укажите компанию';
    },
    phone(v) {
      if (FDL.phone.isEmpty(v)) return 'Укажите номер телефона';
      if (FDL.phone.isValid(v)) return '';
      return FDL.phone.parse(v).kind === 'uz' ? 'Проверьте номер: после +998 нужно 9 цифр' : 'Проверьте номер телефона';
    },
    telegram(v) {
      const handle = telegramHandle(v);
      if (!handle) return '';   // поле необязательное: ника может не быть
      if (!TG_RE.test(handle) || handle.endsWith('_')) return 'Ник: латиница, цифры и _, от 4 до 32 символов';
      return '';
    },
    attendance(v) {
      return v === 'yes' || v === 'no' ? '' : 'Выберите, придёте или нет';
    }
  };

  /* Значения в том виде, в каком они уйдут в таблицу */
  const normalize = {
    text: clean,
    phone: (v) => FDL.phone.format(v).value,
    telegramHandle,
    telegram: (v) => {
      const handle = telegramHandle(v);
      return handle ? '@' + handle : '';
    }
  };

  function validate(name, value) {
    return rules[name] ? rules[name](value) : '';
  }

  FDL.validators = { validate, normalize };
})(window.FDL);
