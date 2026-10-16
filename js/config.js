/* Настройки страницы регистрации. Всё, что может поменяться, лежит здесь, остальной код трогать не нужно.
   Скрипты подключаются обычными <script defer> и делят одно пространство имён window.FDL,
   поэтому страница работает и с сервера, и при открытии index.html двойным кликом. */
window.FDL = window.FDL || {};

FDL.config = {
  /* Адрес веб-приложения Google Apps Script (инструкция в README.md): проект «Fidelity Halloween: регистрация гостей»
     в таблице «Fidelity Halloween Party (Список гостей)». Если строку очистить, форма перейдёт в демо-режим. */
  endpoint: 'https://script.google.com/macros/s/AKfycbzsxMnXKds97IvpACzzi9pvu7k1Xu9EEX93R9p0D-5RNYBOQd00a_sD5oyLgDB17J73zg/exec',

  /* Сколько ждать ответа сервера, мс */
  timeoutMs: 15000,

  /* Ключ в localStorage: помним, что гость уже отправил форму, и при повторном визите показываем результат */
  storageKey: 'fdl-halloween-2026',

  event: {
    title: 'Fidelity Halloween Party',
    /* Время окончания неизвестно, поэтому в календарь событие уходит на весь день, а время начала пишем в описании */
    calendarDates: '20261029/20261030',
    location: 'Nukus 89, Ташкент',
    details: 'Начало в 19:30. Дресс-код: костюмы на Хэллоуин или одежда в чёрном и красном. House of Fidelity.'
  }
};
