/* Точка входа. Сначала эффекты страницы (они слушают события формы), потом сама форма. */
(function (FDL) {
  'use strict';

  FDL.page.init();

  // Плашки демо-режима на странице нет, поэтому напоминаем в консоли, что заявки пока никуда не уходят
  if (!FDL.api.isConfigured()) console.warn('Fidelity: endpoint в js/config.js пустой, форма в демо-режиме и заявки не сохраняются.');

  const form = document.getElementById('regForm');
  const result = document.getElementById('regResult');
  if (form && result) FDL.form.init(form, result);
})(window.FDL);
