/* Аналитика: событие регистрации уходит только после успешной отправки формы, то есть когда сервер
   ответил, что заявка записана в таблицу. Нажатие на кнопку с пустой формой, ошибки в полях и сбои сети
   ничего не отправляют.
   Сами пиксели подключаются на стороне сайта (на Тильде в настройках сайта), здесь мы только вызываем
   те, что есть на странице. Если пикселя нет, ничего не происходит. */
(function (FDL) {
  'use strict';

  const EVENT = 'Fidelity Halloween Party';

  function registered(attendance) {
    const coming = attendance === 'yes';
    try {
      // Meta Pixel (Facebook, Instagram): стандартное событие регистрации только для тех, кто придёт
      if (typeof window.fbq === 'function') {
        if (coming) window.fbq('track', 'CompleteRegistration', { content_name: EVENT, status: 'coming' });
        else window.fbq('trackCustom', 'RegistrationDeclined', { content_name: EVENT });
      }
      // Google Tag Manager, если подключён: событие в dataLayer для своих тегов
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: coming ? 'fdl_registration' : 'fdl_registration_declined' });
      }
    } catch (err) {
      console.error('Аналитика:', err);   // ошибка счётчика не должна ломать регистрацию
    }
  }

  FDL.analytics = { registered };
})(window.FDL);
