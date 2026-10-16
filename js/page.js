/* Эффекты страницы: появление при загрузке и прокрутке, параллакс черепа за мышью.
   При prefers-reduced-motion анимации не запускаются, контент сразу на месте. */
(function (FDL) {
  'use strict';

  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /* Запускаем анимацию первого экрана, когда загрузились шрифты, чтобы надпись не «прыгала» */
  function intro() {
    const ready = () => root.classList.add('fdl-ready');
    if (document.fonts && document.fonts.ready) Promise.race([document.fonts.ready, wait(900)]).then(ready);
    else ready();
  }

  /* Блоки с data-reveal проявляются, когда доезжают до экрана */
  function reveal() {
    if (reduced || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    root.classList.add('fdl-reveal');
  }

  /* Большой череп слегка смещается за мышью. Только для мыши: на телефоне это лишняя работа */
  function parallax() {
    const art = document.querySelector('.hero__art');
    if (!art || reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let targetX = 0, targetY = 0, x = 0, y = 0, frame = 0;

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      art.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.05 ? requestAnimationFrame(tick) : 0;
    }

    window.addEventListener('pointermove', (e) => {
      targetX = (e.clientX / innerWidth - 0.5) * -22;
      targetY = (e.clientY / innerHeight - 0.5) * -14;
      if (!frame) frame = requestAnimationFrame(tick);
    }, { passive: true });
  }

  function init() {
    intro();
    reveal();
    parallax();
  }

  FDL.page = { init };
})(window.FDL);
