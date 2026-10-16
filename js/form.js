/* Форма регистрации: проверка полей, отправка, экран результата.
   Ошибки показываются после того, как гость ушёл с поля, и исчезают сразу, как только значение исправлено.
   Наружу форма сообщает о себе событиями registration:done и registration:reset (всплывают до document). */
(function (FDL) {
  'use strict';

  const FIELDS = ['name', 'position', 'company', 'phone', 'telegram', 'attendance'];

  const MESSAGES = {
    offline: 'Нет интернета. Проверьте связь и нажмите кнопку ещё раз.',
    timeout: 'Сервер долго не отвечает. Попробуйте ещё раз через минуту.',
    failed: 'Не получилось отправить. Попробуйте ещё раз или напишите нам в Instagram @house.of.fidelity.'
  };

  /* localStorage может быть недоступен (приватный режим, запрет cookies), поэтому каждое обращение в try */
  const store = {
    get() {
      try { return JSON.parse(localStorage.getItem(FDL.config.storageKey)); } catch (e) { return null; }
    },
    set(data) {
      try { localStorage.setItem(FDL.config.storageKey, JSON.stringify(data)); } catch (e) { /* не страшно */ }
    },
    clear() {
      try { localStorage.removeItem(FDL.config.storageKey); } catch (e) { /* не страшно */ }
    }
  };

  /* utm-метки из ссылки: по ним видно, с какого QR-кода или поста пришёл гость */
  function utmSource() {
    const params = new URLSearchParams(location.search);
    return Array.from(params.entries())
      .filter(([key]) => key.startsWith('utm_'))
      .map(([key, val]) => key + '=' + val)
      .join('; ')
      .slice(0, 300);
  }

  function calendarUrl(ev) {
    const q = new URLSearchParams({
      action: 'TEMPLATE',
      text: ev.title,
      dates: ev.calendarDates,
      location: ev.location,
      details: ev.details
    });
    return 'https://calendar.google.com/calendar/render?' + q.toString();
  }

  function init(form, result) {
    const submit = form.querySelector('.form__submit');
    const alertBox = form.querySelector('.form__alert');
    const again = result.querySelector('.result__again');
    const calLink = result.querySelector('#calLink');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touched = new Set();
    let sending = false;

    /* Доступ к полям */
    const control = (name) => form.elements[name];
    const value = (name) => (control(name) ? control(name).value : '');
    const inputsOf = (name) => {
      const el = control(name);
      return el && !el.tagName ? Array.from(el) : [el];   // у радиокнопок это RadioNodeList
    };
    const boxOf = (name) => inputsOf(name)[0].closest('.field');

    function setError(name, message) {
      const box = boxOf(name);
      box.classList.toggle('is-invalid', Boolean(message));
      box.querySelector('.field__error').textContent = message;
      inputsOf(name).forEach((input) => {
        if (message) input.setAttribute('aria-invalid', 'true');
        else input.removeAttribute('aria-invalid');
      });
    }

    function check(name) {
      const message = FDL.validators.validate(name, value(name));
      setError(name, message);
      return !message;
    }

    function showAlert(text) {
      alertBox.textContent = text;
      alertBox.hidden = !text;
    }

    function updateSubmitLabel() {
      const label = value('attendance') === 'no' ? submit.dataset.labelNo : submit.dataset.labelYes;
      if (!sending) submit.textContent = label;
    }

    function setBusy(on) {
      sending = on;
      submit.setAttribute('aria-busy', String(on));
      if (on) submit.textContent = 'Отправляем…';
      else updateSubmitLabel();
    }

    function collect() {
      const n = FDL.validators.normalize;
      return {
        name: n.text(value('name')),
        position: n.text(value('position')),
        company: n.text(value('company')),
        phone: n.phone(value('phone')),
        telegram: n.telegram(value('telegram')),
        attendance: value('attendance'),
        source: utmSource()
      };
    }

    function showResult(state, opts = {}) {
      form.hidden = true;
      result.hidden = false;
      result.dataset.state = state;
      if (opts.focus !== false) {
        result.focus({ preventScroll: true });
        result.closest('.card').scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
      }
      form.dispatchEvent(new CustomEvent('registration:done', { bubbles: true, detail: { attendance: state } }));
    }

    function showForm() {
      form.reset();
      FIELDS.forEach((name) => setError(name, ''));
      touched.clear();
      showAlert('');
      store.clear();
      result.hidden = true;
      form.hidden = false;
      updateSubmitLabel();
      control('name').focus();
      form.dispatchEvent(new CustomEvent('registration:reset', { bubbles: true }));
    }

    function errorText(err) {
      if (navigator.onLine === false) return MESSAGES.offline;
      if (err && err.name === 'AbortError') return MESSAGES.timeout;
      return MESSAGES.failed;
    }

    function onSubmit(e) {
      e.preventDefault();
      if (sending) return;
      showAlert('');

      const valid = FIELDS.map((name) => {
        touched.add(name);
        return check(name);
      });
      const firstInvalid = FIELDS[valid.indexOf(false)];
      if (firstInvalid) {
        inputsOf(firstInvalid)[0].focus();
        return;
      }

      const payload = collect();

      // Ловушка заполнена: это бот. Делаем вид, что всё прошло, и ничего не отправляем
      if (form.elements.website.value) {
        showResult(payload.attendance);
        return;
      }

      setBusy(true);
      FDL.api.send(payload)
        .then(() => {
          store.set({ attendance: payload.attendance, at: Date.now() });
          showResult(payload.attendance);
        })
        .catch((err) => {
          console.error('Регистрация не отправлена:', err);
          showAlert(errorText(err));
        })
        .finally(() => setBusy(false));
    }

    /* Убираем лишние пробелы, а ссылку t.me/nick превращаем в ник, чтобы гость видел, что уйдёт в таблицу */
    function tidy(input) {
      const n = FDL.validators.normalize;
      if (input.name === 'telegram') input.value = n.telegramHandle(input.value);
      else if (input.name !== 'phone') input.value = n.text(input.value);
    }

    /* Проверяем поле, когда с него ушли, и перепроверяем на лету, если ошибка уже показана */
    form.addEventListener('focusout', (e) => {
      const name = e.target.name;
      if (!FIELDS.includes(name) || name === 'attendance') return;
      tidy(e.target);
      touched.add(name);
      check(name);
    });

    form.addEventListener('input', (e) => {
      const name = e.target.name;
      if (!FIELDS.includes(name)) return;
      if (name === 'attendance') {
        touched.add(name);
        updateSubmitLabel();
      }
      if (touched.has(name)) check(name);
      if (!alertBox.hidden) showAlert('');
    });

    form.addEventListener('submit', onSubmit);
    again.addEventListener('click', showForm);

    FDL.phone.attach(control('phone'));
    calLink.href = calendarUrl(FDL.config.event);

    // Гость уже отправлял форму с этого устройства: сразу показываем результат
    const saved = store.get();
    if (saved && (saved.attendance === 'yes' || saved.attendance === 'no')) {
      showResult(saved.attendance, { focus: false });
    }
  }

  FDL.form = { init };
})(window.FDL);
