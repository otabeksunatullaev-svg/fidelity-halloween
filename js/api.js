/* Отправка заявки в Google Apps Script.
   Тело уходит как application/x-www-form-urlencoded: это «простой» запрос без предварительного OPTIONS,
   который Apps Script не умеет обрабатывать. Ответ сервера: JSON вида {"ok": true}. */
(function (FDL) {
  'use strict';

  function isConfigured() {
    return /^https:\/\//.test(FDL.config.endpoint || '');
  }

  function send(payload) {
    if (!isConfigured()) return demo(payload);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FDL.config.timeoutMs);

    return fetch(FDL.config.endpoint, {
      method: 'POST',
      body: new URLSearchParams(payload),
      signal: controller.signal
    })
      .then((res) => {
        if (!res.ok) throw new Error('http_' + res.status);
        return res.json();
      })
      .then((data) => {
        if (!data || data.ok !== true) throw new Error((data && data.error) || 'bad_response');
        return data;
      })
      .finally(() => clearTimeout(timer));
  }

  /* Пока адрес не указан, имитируем успешную отправку, чтобы можно было пройти весь сценарий */
  function demo(payload) {
    console.info('(Демо-режим) endpoint в js/config.js пустой, заявка не сохранена:', payload);
    return new Promise((resolve) => setTimeout(() => resolve({ ok: true, demo: true }), 700));
  }

  FDL.api = { send, isConfigured };
})(window.FDL);
