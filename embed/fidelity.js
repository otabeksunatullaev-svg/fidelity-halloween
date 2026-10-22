/* Fidelity Halloween Party: страница регистрации одним скриптом, для блока T123 «HTML-код» на Тильде.
   Сгенерировано: python3 scripts/build_register_single.py register/embed/fidelity.js --embed. Руками не править.
   Подключение на Тильде:
     <div id="fidelity-register"></div>
     <script src="https://ИМЯ.github.io/РЕПОЗИТОРИЙ/embed/fidelity.js" defer></script>
   Картинки загружаются с того же адреса, откуда загружен этот файл (папка assets рядом с embed). */
(function () {
  'use strict';
  var script = document.currentScript;
  var base = script.src.replace(/embed\/[^\/?#]*([?#].*)?$/, '');
  var mount = document.getElementById('fidelity-register');
  if (!mount) {
    mount = document.createElement('div');
    script.parentNode.insertBefore(mount, script);
  }

  // Классы для анимации появления; если что-то пойдёт не так, через 1.8 с контент всё равно покажется
  var root = document.documentElement;
  root.classList.add('fdl-js');
  setTimeout(function () { root.classList.add('fdl-ready'); }, 1800);

  function link(rel, href, crossorigin) {
    var el = document.createElement('link');
    el.rel = rel;
    el.href = href;
    if (crossorigin) el.crossOrigin = 'anonymous';
    document.head.appendChild(el);
  }
  link('preconnect', 'https://fonts.googleapis.com');
  link('preconnect', 'https://fonts.gstatic.com', true);
  link('stylesheet', "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

  var style = document.createElement('style');
  style.textContent = "/* Сгенерировано из исходника «пригласительный rh.cdr»: точные контуры серых фигур и маркеров списка.\n   Маска задаёт форму, цвет и блик рисуются фоном (см. .shape и .glint в register.css). */\n:root{\n  --m-dots:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2321 429'%3E%3Cpath fill-rule='evenodd' d='M525 22c54-9 66 72 14 81-55 10-68-71-14-81zM510 69c7 24 49 18 42-12-6-26-49-17-42 12zM513 11c-69 24-32 129 38 104 23-8 43-37 33-70-8-25-38-45-71-34zM1169 237c-123 5-124-178-5-180 1 0 1 0 2 0l29 176c-8 2-17 4-26 4zM1654 159l-66-36-66-37 0 73 0 73 66-37 66-36zM2296 217c-124-5-124 178-6 180 1 0 2 0 2 0l29-176c-8-2-16-4-25-4zM1348 209c-122 15-93 194 23 177 47-7 83-47 76-102-6-45-48-82-99-75zM2119 169c20-41 3-91-38-111-13-7-27-9-41-9l7 91c0 0-34-45-56-72-9 7-17 17-22 28-20 41-3 91 38 112 41 20 92 3 112-39zM928 327c11 41 84 31 72-20-11-45-86-29-72 20zM745 227c93-17 114 124 24 139-94 16-117-123-24-139zM725 207c-120 42-56 222 65 179 39-14 74-62 57-120-13-43-66-78-122-59zM1798 283c15-20-4-32-12-40 41-13 77 11 79 49 3 37-28 68-67 62-52-8-55-79-42-76 0 0 24 29 42 5zM1732 313c10 45 49 68 92 60 38-7 71-47 59-94-23-96-176-67-151 34zM121 45c-121 15-92 194 24 177 46-7 83-47 75-102-6-45-47-82-99-75zM127 94c-57 9-38 92 17 78 46-11 32-86-17-78zM349 297c29 0 53 24 53 53 0 29-24 53-53 53-29 0-53-24-53-53 0-29 24-53 53-53z'/%3E%3C/svg%3E\");\n  --m-bullet-1:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 243 261'%3E%3Cpath fill-rule='evenodd' d='M39 120c-16-93 125-114 141-24 16 95-125 118-141 24zM120 145c41-11 31-85-20-72-46 10-30 86 20 72zM20 140c42 121 223 57 180-65-15-40-63-75-121-57-43 13-79 66-59 122z'/%3E%3C/svg%3E\");\n  --m-bullet-2:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 201 228'%3E%3Cpath fill-rule='evenodd' d='M6 106c16 122 195 93 178-23-7-46-47-83-102-76-45 6-82 48-76 99z'/%3E%3C/svg%3E\");\n  --m-bullet-3:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 179 191'%3E%3Cpath fill-rule='evenodd' d='M121 20c-42-20-92-3-112 38-6 13-9 27-8 41l90-7c0 0-45 35-72 56 8 9 17 17 28 22 42 20 92 3 112-38 20-41 3-91-38-112z'/%3E%3C/svg%3E\");\n  --m-bullet-4:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 227 215'%3E%3Cpath fill-rule='evenodd' d='M115 111c-23-17-37 5-46 15-15-48 12-89 56-92 43-3 78 33 71 77-9 60-91 64-87 49 0-1 33-28 6-49zM149 187c52-12 78-56 69-106-8-43-54-81-108-68-110 27-77 202 39 174z'/%3E%3C/svg%3E\");\n  --m-bullet-5:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 201 228'%3E%3Cpath fill-rule='evenodd' d='M6 106c16 122 195 93 178-23-7-46-47-83-102-76-45 6-82 48-76 99zM56 101c9 57 91 37 78-17-11-46-86-32-78 17z'/%3E%3C/svg%3E\");\n  --m-lid-a:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2609 2307'%3E%3Cpath fill-rule='evenodd' d='M2609 1447l-2021-1447c-588 821 1405 2307 2021 1447zM557 324l1830 1042c-519 434-1946-445-1830-1042zM1586 978c287 36 219 461-56 420-110-17-196-111-179-241 14-107 113-194 235-179z'/%3E%3C/svg%3E\");\n  --m-lid-b:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1970 1742'%3E%3Cpath fill-rule='evenodd' d='M1970 650l-1526 1092c-444-620 1061-1742 1526-1092zM421 1498l1381-787c-392-328-1469 336-1381 787zM1261 885c-20-83-91-125-172-110-69 12-130 86-109 173 43 178 326 124 281-63zM1138 941c-28 36 8 58 23 74-77 24-143-21-147-91-5-69 53-125 123-114 98 14 103 146 79 140 0 0-44-53-78-9z'/%3E%3C/svg%3E\");\n  --m-lid-c:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2789 2467'%3E%3Cpath fill-rule='evenodd' d='M0 1547l2161-1547c628 878-1502 2467-2161 1547zM2194 346l-1956 1114c555 464 2080-475 1956-1114zM1523 1258c123-20 206-137 186-260-7-38-22-73-45-101l-188 157c0 0 43-147 69-236-30-9-63-11-96-5-123 20-206 137-185 260 20 122 136 206 259 185z'/%3E%3C/svg%3E\");\n  --m-half-a:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 548 678'%3E%3Cpath fill-rule='evenodd' d='M455 661c-453 17-455-655-20-661 2 0 5 0 8 0l105 644c-29 10-60 16-93 17z'/%3E%3C/svg%3E\");\n  --m-tri:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 686 757'%3E%3Cpath fill-rule='evenodd' d='M686 378l-343-189-343-189 0 378 0 379 343-190 343-189z'/%3E%3C/svg%3E\");\n  --m-half-b:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 592 732'%3E%3Cpath fill-rule='evenodd' d='M491 18c-489-18-491 708-21 714 3 0 6 0 8 0l115-696c-32-10-66-16-102-18z'/%3E%3C/svg%3E\");\n  --m-cut:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 809 762'%3E%3Cpath fill-rule='evenodd' d='M723 513c86-176 14-388-162-475-55-27-114-38-171-36l30 385c0 0-148-190-239-305-39 31-71 71-95 119-86 175-13 388 162 474 176 87 389 14 475-162z'/%3E%3C/svg%3E\");\n  --m-dot:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 417 452'%3E%3Cpath fill-rule='evenodd' d='M58 279c48 173 359 128 307-87-46-192-365-124-307 87z'/%3E%3C/svg%3E\");\n  --m-ring:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 722 672'%3E%3Cpath fill-rule='evenodd' d='M335 54c-335 117-157 618 179 499 111-40 208-175 159-335-36-119-182-218-338-164zM389 108c260-46 318 346 68 389-264 45-327-343-68-389z'/%3E%3C/svg%3E\");\n}\n.shape--dots{--m:var(--m-dots);aspect-ratio:5.4101}\n.shape--bullet-1{--m:var(--m-bullet-1);aspect-ratio:0.9301}\n.shape--bullet-2{--m:var(--m-bullet-2);aspect-ratio:0.8827}\n.shape--bullet-3{--m:var(--m-bullet-3);aspect-ratio:0.9409}\n.shape--bullet-4{--m:var(--m-bullet-4);aspect-ratio:1.0525}\n.shape--bullet-5{--m:var(--m-bullet-5);aspect-ratio:0.8827}\n.shape--lid-a{--m:var(--m-lid-a);aspect-ratio:1.1306}\n.shape--lid-b{--m:var(--m-lid-b);aspect-ratio:1.1306}\n.shape--lid-c{--m:var(--m-lid-c);aspect-ratio:1.1306}\n.shape--half-a{--m:var(--m-half-a);aspect-ratio:0.8089}\n.shape--tri{--m:var(--m-tri);aspect-ratio:0.9073}\n.shape--half-b{--m:var(--m-half-b);aspect-ratio:0.8090}\n.shape--cut{--m:var(--m-cut);aspect-ratio:1.0628}\n.shape--dot{--m:var(--m-dot);aspect-ratio:0.9216}\n.shape--ring{--m:var(--m-ring);aspect-ratio:1.0752}\n\n/* Регистрация на Fidelity Halloween Party. Дизайн один в один с пригласительным («пригласительный rh.cdr»).\n   Надписи, логотип, черепа и серые фигуры взяты из исходника: assets/poster/*, assets/skull-*.webp, css/shapes.css.\n   Mobile-first: на телефоне элементы постера идут столбиком в масштабе макета, от 900px первый экран\n   собирается как постер целиком (координаты в процентах от его размера 210x148,5 мм). */\n\n/* 1. Токены. Цвета сняты с экспорта макета: CMYK 0/100/100/0, 90% и 100% чёрного */\n:root{\n  --bg:#141615;\n  --line:#2C2E2D;\n  --line-hi:#3A3C3B;\n  --red:#DC2B1C;\n  --red-hi:#EE3A28;\n  --red-text:#F05A46;        /* красный для мелкого текста: контраст с фоном выше 4.5 */\n  --ink:#FFFFFF;\n  --text:#D7D8D4;\n  --muted:#8F918E;\n  --gray:#313131;            /* серые фигуры макета */\n  --shine:rgba(255,255,255,.85);\n\n  --f-body:\"Montserrat\",system-ui,-apple-system,\"Segoe UI\",sans-serif;\n\n  --gutter:clamp(20px,5vw,64px);\n  --max:1320px;\n  --ease:cubic-bezier(.2,.7,.2,1);\n  --poster-ratio:1.41414;    /* 210 / 148,5 мм */\n\n  color-scheme:dark;\n}\n\n/* 2. База. Всё ограничено контейнером .fdl, чтобы страницу можно было вставить в чужой шаблон\n   (например, в блок T123 на Тильде) и не задеть его стили. Специфичность базы ровно один класс (.fdl :where(...)):\n   этого хватает, чтобы перебить правила шаблона для голых тегов (p, h1, img), и не хватает, чтобы перебить\n   компоненты ниже: они идут позже с тем же весом */\nhtml{background:var(--bg);scroll-behavior:smooth}\nbody{margin:0;background:var(--bg)}\n.fdl{background:var(--bg);color:var(--text);font:400 16px/1.55 var(--f-body);overflow-x:hidden;overflow-x:clip;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;text-align:left}\n.fdl,.fdl *,.fdl *::before,.fdl *::after{box-sizing:border-box}\n.fdl :where(*){font-family:inherit;letter-spacing:inherit}\n.fdl :where(img,svg){display:block;max-width:100%;height:auto;border:0}\n.fdl :where(h1,h2,h3,p,ul,li,fieldset,legend,label){margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;color:inherit}\n.fdl :where(ul){list-style:none}\n.fdl :where(a){color:inherit}\n.fdl :where(button,input){font:inherit;color:inherit}\n.fdl :where(:focus-visible){outline:2px solid var(--ink);outline-offset:3px}\n.fdl ::selection{background:var(--red);color:var(--ink)}\n.fdl [hidden]{display:none!important}\n\n.wrap{width:100%;max-width:var(--max);margin-inline:auto;padding-left:max(var(--gutter),env(safe-area-inset-left,0px));padding-right:max(var(--gutter),env(safe-area-inset-right,0px))}\n.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n\n/* 3. Фигуры из макета: форма задаётся маской (css/shapes.css), цвет и блик фоном */\n.shape{display:block;flex:none;width:var(--s,1em);background-color:var(--c,var(--gray));-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat}\n\n/* Блик: светлая полоса пробегает по серой фигуре слева направо, задержка --d задаёт волну */\n.glint{background-image:linear-gradient(100deg,transparent 40%,var(--shine) 50%,transparent 60%);background-size:300% 100%;background-repeat:no-repeat;background-position:100% 0;animation:glint 5s var(--d,0s) infinite}\n@keyframes glint{0%{background-position:100% 0}26%,100%{background-position:0 0}}\n\n.marker{display:inline-block;width:.6em;aspect-ratio:.9;margin-right:.6em;vertical-align:.05em;background:var(--red);-webkit-mask:var(--m-tri) center/contain no-repeat;mask:var(--m-tri) center/contain no-repeat}\n\n/* Зерно поверх страницы, как печать на постере */\n.grain{position:fixed;inset:0;z-index:70;pointer-events:none;opacity:.06;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")}\n\n/* 4. Кнопки */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:56px;padding:0 28px;border:0;border-radius:0;background:var(--red);color:var(--ink);font:700 14px/1.1 var(--f-body);letter-spacing:.08em;text-transform:uppercase;text-align:center;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .2s,box-shadow .2s,transform .2s,opacity .2s}\n.btn:hover{background:var(--red-hi)}\n.btn:active{transform:translateY(1px)}\n.btn--block{width:100%}\n.btn--ghost{background:transparent;box-shadow:inset 0 0 0 1.5px var(--red)}\n.btn--ghost:hover{background:rgba(220,43,28,.14)}\n\n/* 5. Левый постер (первый экран). Телефон: столбик в масштабе макета.\n   --u: сколько пикселей в миллиметре макета; колонка текста на постере шириной 88,3 мм занимает всю ширину экрана,\n   на планшете масштаб ограничен, чтобы первый экран помещался целиком */\n.hero{position:relative;overflow:hidden;container-type:inline-size;--u:min(calc((100cqw - 2 * var(--gutter)) / 88.3),5.6px);--cue-gap:32px}\n.hero__stage{position:relative;isolation:isolate}\n.pp img{width:100%;height:auto}\n.v-poster{display:none}\n\n/* Череп на телефоне: высота 64% экрана, низ картинки на 3,9% ниже подбородка, поэтому подбородок совпадает с низом блока даты.\n   Слева он начинается так, чтобы челюсть (21% ширины черепа от его края) не заходила на дату шириной 48,49 мм макета */\n.hero__art{position:absolute;z-index:-1;top:auto;bottom:-2.49vh;bottom:-2.49svh;left:calc(48.49 * var(--u) + 44px - 10.8vh);left:calc(48.49 * var(--u) + 44px - 10.8svh);height:64vh;height:64svh;pointer-events:none;will-change:transform}\n.hero__skull{height:100%;width:auto;max-width:none;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 34%);mask-image:linear-gradient(to bottom,transparent 0,#000 34%)}\n\n.hero__head{display:flex;flex-direction:column;align-items:center;min-height:100vh;min-height:100svh;padding:calc(28px + env(safe-area-inset-top,0px)) var(--gutter) calc(var(--cue-gap) + env(safe-area-inset-bottom,0px))}\n.pp{width:calc(var(--mm) * var(--u))}\n.pp--logo{width:calc(var(--mm) * var(--u) * 1.15)}\n.pp--dots{margin-top:12px}\n.pp--title{margin-block:auto;padding-block:16px}   /* надпись по центру между логотипом и датой */\n.hero__when{position:relative;align-self:stretch;display:flex;flex-direction:column;align-items:flex-start}\n.pp--date{width:calc(var(--mm) * var(--u) * 1.3)}\n.pp--dress{width:auto;max-width:17em;margin-top:12px;font:500 12.5px/1.4 var(--f-body);color:var(--text)}\n\n.hero__story{display:flex;flex-direction:column;align-items:center;gap:22px;padding:24px var(--gutter) 32px;text-align:center}\n.pp--intro,.pp--list,.pp--outro{width:auto;max-width:34em}\n.pp--intro{font:500 17px/1.5 var(--f-body);color:var(--ink)}\n.pp--list{text-align:left;font-size:15px;color:var(--text)}\n.pp--list p{text-align:center}\n.bullets{width:fit-content;margin:14px auto 0}\n.bullets li{display:flex;align-items:center;gap:12px}\n.bullets li+li{margin-top:6px}\n.bullets .shape{--s:12px;--c:var(--red)}\n.pp--outro{font:600 16px/1.45 var(--f-body);color:var(--ink)}\n.pp--hand{width:calc(var(--mm) * var(--u) * 1.2)}\n\n/* Указатель вниз вместо кнопки: треугольник из макета остриём вниз */\n.scroll-cue{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:calc(var(--cue-gap) - 6px);padding:0 12px;color:var(--muted);text-decoration:none;-webkit-tap-highlight-color:transparent}\n.scroll-cue__label{font:600 12px/1 var(--f-body);letter-spacing:.24em;text-transform:uppercase;color:var(--text);transition:color .2s}\n.scroll-cue__arrow{--s:18px;--c:var(--red);rotate:90deg;animation:cue 1.8s ease-in-out infinite}\n.scroll-cue:hover .scroll-cue__label{color:var(--ink)}\n@keyframes cue{0%,100%{translate:0 0}50%{translate:0 6px}}\n\n/* 6. Правый постер: блок регистрации. Черепа и фигуры (.deco) стоят по координатам макета.\n   1cqw = 1% ширины блока; высота постера = 70,714% его ширины */\n/* По горизонтали черепа обрезаются краем экрана, по вертикали заходят на соседние блоки, поэтому стыков не видно */\n.register{--k:1cqw;position:relative;isolation:isolate;container-type:inline-size;padding:8cqw 0 34cqw;overflow:hidden;overflow:clip visible}\n.register__decor{position:absolute;inset:0;z-index:-1;pointer-events:none}\n.deco{--x:var(--mx);--y:var(--my);--s:var(--mw);position:absolute;left:calc(var(--x) * 1%);top:calc(var(--a,0) * 100% + var(--y) * var(--k));width:calc(var(--s) * var(--k));transform:translate(-50%,-50%) rotate(var(--r,0deg)) scaleY(var(--fy,1))}\n.skull{aspect-ratio:.768;height:auto;animation:drift 11s ease-in-out var(--d,0s) infinite alternate}\n.skull--alt{aspect-ratio:.785}\n@keyframes drift{from{translate:0 0;rotate:0deg}to{translate:0 -12px;rotate:4deg}}\n.only-wide{display:none}\n\n.register__head{max-width:36em;margin-inline:auto;text-align:center}\n.register__logo{width:52cqw;max-width:420px;height:auto;margin:0 auto}\n.register__title{margin-top:28px;font:800 13px/1.3 var(--f-body);letter-spacing:.22em;text-transform:uppercase;color:var(--ink)}\n.register__lead{margin-top:14px;font-size:18px;line-height:1.45;color:var(--text)}\n/* Что ждёт гостей: под дресс-кодом и тем же шрифтом, вместо точек красные фигуры бренда */\n.perks{display:flex;flex-wrap:wrap;gap:6px 20px;margin-top:12px;font:500 12.5px/1.4 var(--f-body);color:var(--text)}\n.perks li{display:flex;align-items:center;gap:8px}\n.perks .shape{--s:10px;--c:var(--red)}\n\n.card{position:relative;max-width:660px;margin:32px auto 0;padding:28px 20px 24px;background:var(--bg);border:1px solid var(--line)}\n\n/* 7. Форма */\n.form__fields{display:grid;gap:22px}\n.field{display:flex;flex-direction:column;gap:6px;min-width:0;border:0}\n.field__label{padding:0;font:600 11.5px/1.3 var(--f-body);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .2s}\n.field:focus-within .field__label{color:var(--ink)}\n.field__opt{letter-spacing:.02em;text-transform:none;color:#6E706D}\n.field__input{width:100%;min-width:0;height:50px;padding:0;border:0;border-bottom:1.5px solid var(--line-hi);border-radius:0;background:transparent;color:var(--ink);font:500 17px/1.2 var(--f-body);caret-color:var(--red);outline:none;-webkit-appearance:none;appearance:none;transition:border-color .2s}\n.field__input::placeholder{color:#5E605D;opacity:1}\n.field__input:focus{border-bottom-color:var(--red)}\n.field__input:-webkit-autofill{-webkit-text-fill-color:var(--ink);box-shadow:0 0 0 100px var(--bg) inset;transition:background-color 9999s}\n.field__control{display:flex;align-items:center;border-bottom:1.5px solid var(--line-hi);transition:border-color .2s}\n.field__control:focus-within{border-bottom-color:var(--red)}\n.field__control .field__input{border-bottom:0}\n.field__prefix{margin-right:2px;font:500 17px/1 var(--f-body);color:var(--muted)}\n.field__error{font:500 13px/1.35 var(--f-body);color:var(--red-text)}\n.field__error:empty{display:none}\n.field.is-invalid .field__input,.field.is-invalid .field__control{border-bottom-color:var(--red-text)}\n.field.is-invalid .field__control .field__input{border-bottom:0}\n\n.choice__options{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px}\n.choice__option{position:relative;display:block;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.choice__box{display:flex;align-items:center;gap:12px;min-height:56px;padding:0 16px;border:1.5px solid var(--line-hi);font:600 15px/1.2 var(--f-body);color:var(--text);transition:border-color .2s,background-color .2s,color .2s}\n.choice__box .shape{--s:18px;--c:#4A4C4A;transition:background-color .2s}\n.choice__option:hover .choice__box{border-color:#5A5C5A}\n.choice__option input:checked+.choice__box{border-color:var(--red);background:rgba(220,43,28,.12);color:var(--ink)}\n.choice__option input:checked+.choice__box .shape{--c:var(--red)}\n.choice__option input:focus-visible+.choice__box{outline:2px solid var(--ink);outline-offset:2px}\n.choice.is-invalid .choice__box{border-color:rgba(240,90,70,.55)}\n\n.form__trap{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}\n.form__alert{margin-top:22px;padding:12px 14px;border-left:3px solid var(--red);background:rgba(220,43,28,.1);font:500 14px/1.45 var(--f-body);color:#F3D0CB}\n.form__submit{margin-top:28px}\n.form__submit[aria-busy=\"true\"]{opacity:.7;cursor:progress}\n.form__note{margin-top:12px;font-size:12.5px;line-height:1.45;color:var(--muted);text-align:center}\n\n/* Экран после отправки */\n.result{padding:8px 0 4px;text-align:center;outline:none}\n.result__view{display:none}\n.result[data-state=\"yes\"] [data-view=\"yes\"],.result[data-state=\"no\"] [data-view=\"no\"]{display:block}\n.result__icon{--s:44px;--c:var(--red);margin:0 auto 18px}\n.result__title{font:800 clamp(24px,6.5vw,34px)/1.1 var(--f-body);letter-spacing:.04em;color:var(--red);text-transform:uppercase}\n.result__text{max-width:30em;margin:14px auto 0;font-size:15.5px;color:var(--text)}\n.result__actions{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:26px}\n.result__actions .btn{flex:1 1 180px;max-width:260px;min-height:50px;padding:0 18px;font-size:13px}\n.result__again{margin-top:22px;padding:8px;border:0;background:none;font:600 13px/1.3 var(--f-body);color:var(--muted);text-decoration:underline;text-underline-offset:4px;cursor:pointer}\n.result__again:hover{color:var(--ink)}\n\n/* 8. Подвал */\n.footer{padding:8px 0 calc(32px + env(safe-area-inset-bottom,0px));text-align:center;font-size:13px;color:var(--muted)}\n.footer__inner{display:flex;flex-direction:column;align-items:center;gap:8px}\n.footer__logo{width:auto;height:26px;margin-bottom:8px}\n.footer a{text-decoration:none}\n.footer a:hover{color:var(--ink)}\n\n\n/* 10. Движение: появление при загрузке и при прокрутке.\n   Черепа анимируются отдельными свойствами scale, translate и rotate, чтобы не сбивать transform, которым они расставлены */\n.fdl-js .intro,.fdl-js .brush{opacity:0}\n.fdl-ready .intro{animation:rise 1s var(--ease) calc(var(--i,0) * .14s + .1s) both}\n.fdl-ready .brush{animation:brush 1.2s var(--ease) .3s both}\n.fdl-ready .hero__skull{animation:skull-in 1.6s var(--ease) .2s both,breathe 9s ease-in-out 1.8s infinite}\n.fdl-ready .pp--title{animation:flicker 8s 3s infinite}\n.fdl-ready .pp--dots.intro{animation:rise 1s var(--ease) .1s both,glint 5s 1.2s infinite}\n.fdl-reveal [data-reveal]{opacity:0;translate:0 22px;transition:opacity .9s var(--ease),translate .9s var(--ease)}\n.fdl-reveal [data-reveal].is-in{opacity:1;translate:none}\n\n@keyframes rise{from{opacity:0;translate:0 14px}to{opacity:1;translate:none}}\n/* Надпись «проводится кистью» слева направо */\n@keyframes brush{from{opacity:1;clip-path:inset(-10% 100% -10% -5%)}to{opacity:1;clip-path:inset(-10% -5% -10% -5%)}}\n@keyframes skull-in{from{opacity:0;scale:1.06}to{opacity:1;scale:1}}\n@keyframes breathe{0%,100%{scale:1}50%{scale:1.025}}\n@keyframes flicker{0%,90%,93%,96%,100%{opacity:1}91%{opacity:.35}94.5%{opacity:.6}}\n\n@media (prefers-reduced-motion:reduce){\n  html{scroll-behavior:auto}\n  *,*::before,*::after{animation:none!important;transition:none!important}\n  .fdl-js .intro,.fdl-js .brush{opacity:1}\n  .fdl-reveal [data-reveal]{opacity:1;translate:none}\n}\n\n/* 11. Планшет */\n@media (min-width:600px){\n  .card{padding:40px 44px 32px}\n  .form__fields{grid-template-columns:1fr 1fr;gap:26px 28px}\n  .field--full{grid-column:1/-1}\n  .pp--intro{font-size:19px}\n  .register__lead{font-size:20px}\n}\n\n/* 12. Десктоп: первый экран собран как левый постер, блок формы как правый */\n@media (min-width:900px){\n  /* Постер вписывается в экран целиком, под ним остаётся место для кнопки */\n  .hero{--stage-w:min(100cqw,calc((100vh - 96px) * var(--poster-ratio)));--stage-w:min(100cqw,calc((100svh - 96px) * var(--poster-ratio)))}\n  .hero__stage{width:var(--stage-w);aspect-ratio:var(--poster-ratio);margin-inline:auto}\n  .hero__head,.hero__story,.hero__when{display:contents}\n  .pp{position:absolute;left:calc(var(--l) * 1%);top:calc(var(--t) * 1%);width:calc(var(--w) * 1%);max-width:none;margin:0}\n  .v-poster{display:block}\n  .v-flow{display:none}\n\n  .hero__art{inset:0;height:auto;z-index:-1}\n  .hero__skull{position:absolute;left:77.77%;top:22.29%;width:63.42%;height:116.79%;transform:translate(-50%,-50%) rotate(-1.6deg);-webkit-mask-image:none;mask-image:none}\n\n  .hero{padding-bottom:96px}\n  /* Под дресс-кодом постера: тот же левый край, кегль как у кривых дресс-кода (в долях ширины постера) */\n  .perks{position:absolute;left:66.83%;top:97%;margin:0;gap:0 1.6em;font-size:calc(var(--stage-w) * .0136)}\n  .perks .shape{--s:.8em}\n  .scroll-cue{position:absolute;left:50%;top:calc(100% + 18px);margin:0;transform:translateX(-50%)}\n\n  /* --k: 1% ширины, но не больше 14px, чтобы на широких экранах черепа не росли выше формы */\n  .register{--k:min(1cqw,14px);padding:calc(3 * var(--k)) 0 calc(5 * var(--k))}\n  .deco{--x:var(--cx);--y:calc((var(--cy) - var(--a,0) * 100) * .70714);--s:var(--w)}\n  .only-wide{display:block}\n  .register__logo{width:calc(28.21 * var(--k));max-width:none}\n  .footer{padding-top:24px}\n}\n";
  document.head.appendChild(style);

  // Относительные пути к картинкам превращаем в полные адреса на хостинге
  mount.innerHTML = "<!-- Вся страница внутри .fdl: стили ограничены этим контейнером -->\n<div class=\"fdl\">\n<div class=\"grain\" aria-hidden=\"true\"></div>\n\n<main>\n  <!-- 1. Левый постер пригласительного. Все надписи, логотип и черепа взяты из исходника «пригласительный rh.cdr».\n       --l, --t, --w: положение и ширина элемента в процентах от постера (для десктопа, где постер собран один в один);\n       --mm: ширина в миллиметрах макета (для телефона, где элементы идут столбиком в том же масштабе). -->\n  <section class=\"hero\" aria-labelledby=\"hero-title\">\n    <div class=\"hero__stage\">\n      <div class=\"hero__head\">\n        <img class=\"pp pp--logo intro\" style=\"--i:0;--l:18.49;--t:5.81;--w:12.67;--mm:26.6\" src=\"assets/poster/logo.svg\" width=\"2661\" height=\"1289\" alt=\"Fidelity\">\n        <i class=\"pp pp--dots shape shape--dots glint intro\" style=\"--i:0;--l:19.19;--t:16.51;--w:11.05;--mm:23.2\" aria-hidden=\"true\"></i>\n        <h1 class=\"pp pp--title\" id=\"hero-title\" style=\"--l:4.12;--t:21.40;--w:40.04;--mm:84.1\">\n          <span class=\"sr-only\">Fidelity </span><img class=\"brush\" src=\"assets/poster/title.webp\" width=\"1346\" height=\"589\" alt=\"Halloween Party\">\n        </h1>\n        <div class=\"hero__when\">\n          <!-- Череп привязан к блоку с датой: на телефоне его подбородок стоит на уровне строки «Велком-дринки, Фуршет» -->\n          <div class=\"hero__art\" aria-hidden=\"true\">\n            <img class=\"hero__skull intro\" style=\"--i:2\" src=\"assets/skull-1100.webp\" srcset=\"assets/skull-640.webp 640w, assets/skull-1100.webp 1100w\" sizes=\"(min-width: 900px) 60vw, 90vw\" width=\"1100\" height=\"1369\" alt=\"\" fetchpriority=\"high\">\n          </div>\n          <p class=\"pp pp--date intro\" style=\"--i:3;--l:66.78;--t:82.98;--w:17.75;--mm:37.3\"><img src=\"assets/poster/date.svg\" width=\"3728\" height=\"1133\" alt=\"29 октября, 19:30, Nukus 89\"></p>\n          <p class=\"pp pp--dress intro\" style=\"--i:4;--l:66.83;--t:92.06;--w:29.05;--mm:61\">\n            <img class=\"v-poster\" src=\"assets/poster/dress.svg\" width=\"6101\" height=\"577\" alt=\"Дресс-код: костюмы на Хэллоуин; одежда в чёрном, красном цветах.\">\n            <span class=\"v-flow\"><i class=\"marker\" aria-hidden=\"true\"></i>Дресс-код: костюмы на Хэллоуин; одежда в чёрном, красном цветах.</span>\n          </p>\n          <!-- Что ждёт гостей: под дресс-кодом тем же шрифтом (на компьютере по координатам постера, как дресс-код) -->\n          <ul class=\"perks intro\" style=\"--i:5\" aria-label=\"Что будет на вечеринке\">\n            <li><i class=\"shape shape--bullet-1\" aria-hidden=\"true\"></i>Велком-дринки</li>\n            <li><i class=\"shape shape--bullet-4\" aria-hidden=\"true\"></i>Фуршет</li>\n          </ul>\n        </div>\n        <a class=\"scroll-cue intro\" style=\"--i:6\" href=\"#register\" aria-label=\"Листайте вниз к регистрации\">\n          <span class=\"scroll-cue__label\">Листайте</span>\n          <i class=\"shape shape--tri scroll-cue__arrow\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n\n      <!-- Легенда. На десктопе это точные кривые из макета (img), на телефоне тот же текст обычным HTML,\n           потому что мелкий текст постера на узком экране был бы 9-10 px. Показывается только одна из версий. -->\n      <div class=\"hero__story\">\n        <p class=\"pp pp--intro\" data-reveal style=\"--l:9.16;--t:50.45;--w:31.23;--mm:65.6\">\n          <img class=\"v-poster\" src=\"assets/poster/intro.svg\" width=\"6558\" height=\"1097\" alt=\"Говорят, самые страшные истории рассказывают не призраки, и даже не ведьмы, и не вампиры…\">\n          <span class=\"v-flow\">Говорят, самые страшные истории рассказывают не&nbsp;призраки, и даже не ведьмы, и&nbsp;не&nbsp;вампиры…</span>\n        </p>\n        <p class=\"pp pp--caps\" data-reveal style=\"--l:4.12;--t:60.95;--w:41.32;--mm:86.8\"><img src=\"assets/poster/caps.svg\" width=\"8678\" height=\"655\" alt=\"Самые страшные истории рассказывают маркетологи после второго бокала.\"></p>\n        <div class=\"pp pp--list\" data-reveal style=\"--l:3.92;--t:69.30;--w:42.04;--mm:88.3\">\n          <img class=\"v-poster\" src=\"assets/poster/list.svg\" width=\"8828\" height=\"2464\" alt=\"Старинные рукописи Fidelity гласят, что в последний четверг октября 2026 года соберутся те, кто: управляет бюджетами; принимает решения; создает бренды; влияет на рынок; знает цену сильным идеям и дорогим ошибкам.\">\n          <div class=\"v-flow\">\n            <p>Старинные рукописи Fidelity гласят, что в&nbsp;последний четверг октября 2026&nbsp;года соберутся те, кто:</p>\n            <ul class=\"bullets\">\n              <li><i class=\"shape shape--bullet-3\" aria-hidden=\"true\"></i>управляет бюджетами;</li>\n              <li><i class=\"shape shape--bullet-2\" aria-hidden=\"true\"></i>принимает решения;</li>\n              <li><i class=\"shape shape--bullet-5\" aria-hidden=\"true\"></i>создает бренды;</li>\n              <li><i class=\"shape shape--bullet-4\" aria-hidden=\"true\"></i>влияет на рынок;</li>\n              <li><i class=\"shape shape--bullet-1\" aria-hidden=\"true\"></i>знает цену сильным идеям и дорогим ошибкам.</li>\n            </ul>\n          </div>\n        </div>\n        <p class=\"pp pp--outro\" data-reveal style=\"--l:4.12;--t:88.94;--w:55.26;--mm:116\">\n          <img class=\"v-poster\" src=\"assets/poster/outro.svg\" width=\"11604\" height=\"342\" alt=\"Они обменяются историями и найдут новые знакомства…\">\n          <span class=\"v-flow\">Они обменяются историями и найдут новые знакомства…</span>\n        </p>\n        <p class=\"pp pp--hand\" data-reveal style=\"--l:4.12;--t:92.32;--w:23.23;--mm:48.8\"><img src=\"assets/poster/hand.svg\" width=\"4879\" height=\"538\" alt=\"Среди них будете и вы.\"></p>\n      </div>\n    </div>\n\n  </section>\n\n  <!-- 2. Правый постер, продолжение первого экрана без разделителя. Черепа и серые фигуры по макету:\n       --cx, --cy: центр в процентах от постера, --w: ширина в процентах; --a: к какому краю блока привязан ряд\n       (0 верх, .5 середина, 1 низ), так ряды не наезжают на форму при любой её высоте.\n       Верхний и нижний центральные черепа макета убраны: логотип стоит наверху между черепами, блок короче.\n       --mx, --my, --mw: положение на телефоне (my в процентах ширины от верхнего или нижнего края). -->\n  <section class=\"register\" id=\"register\" aria-labelledby=\"register-title\">\n    <div class=\"register__decor\" aria-hidden=\"true\">\n      <img class=\"deco skull\" src=\"assets/skull-sm.webp\" width=\"400\" height=\"498\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:10.02;--cy:16.59;--w:15.78;--a:0;--mx:8;--my:16;--mw:28;--d:0s\">\n      <img class=\"deco skull skull--alt\" src=\"assets/skull-alt-sm.webp\" width=\"400\" height=\"509\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:87.97;--cy:19.93;--w:22.06;--a:0;--mx:92;--my:17;--mw:30;--d:-2s\">\n      <img class=\"deco skull only-wide\" src=\"assets/skull-sm.webp\" width=\"400\" height=\"498\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:21.48;--cy:56.84;--w:13.37;--r:-167.8deg;--fy:-1;--a:.5;--d:-6s\">\n      <img class=\"deco skull only-wide\" src=\"assets/skull-sm.webp\" width=\"400\" height=\"498\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:80.51;--cy:57.78;--w:17.59;--r:33.1deg;--fy:-1;--a:.5;--d:-3s\">\n      <img class=\"deco skull\" src=\"assets/skull-sm.webp\" width=\"400\" height=\"498\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:10.21;--cy:87.70;--w:17.59;--r:-54.5deg;--a:1;--mx:14;--my:-15;--mw:28;--d:-5s\">\n      <img class=\"deco skull\" src=\"assets/skull-sm.webp\" width=\"400\" height=\"498\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"--cx:89.81;--cy:91.32;--w:17.59;--r:168.3deg;--fy:-1;--a:1;--mx:86;--my:-14;--mw:28;--d:-7s\">\n\n      <i class=\"deco shape shape--lid-b glint only-wide\" style=\"--cx:71;--cy:6.04;--w:9.38;--a:0;--d:.4s\"></i>\n      <i class=\"deco shape shape--cut glint\" style=\"--cx:29.70;--cy:14.15;--w:3.85;--a:0;--mx:36;--my:4;--mw:5;--d:1.2s\"></i>\n      <i class=\"deco shape shape--tri glint\" style=\"--cx:74;--cy:29.26;--w:3.27;--a:0;--mx:63;--my:4;--mw:4.5;--d:2s\"></i>\n      <i class=\"deco shape shape--lid-c glint only-wide\" style=\"--cx:13.14;--cy:43.85;--w:13.28;--a:.5;--d:.8s\"></i>\n      <i class=\"deco shape shape--half-a glint only-wide\" style=\"--cx:91.35;--cy:51.94;--w:2.61;--a:.5;--d:2.6s\"></i>\n      <i class=\"deco shape shape--ring glint only-wide\" style=\"--cx:10.40;--cy:63.17;--w:3.44;--a:.5;--d:1.6s\"></i>\n      <i class=\"deco shape shape--dot glint only-wide\" style=\"--cx:24;--cy:70;--w:1.99;--a:1;--d:3.2s\"></i>\n      <i class=\"deco shape shape--half-b glint only-wide\" style=\"--cx:25;--cy:99;--w:2.82;--a:1;--d:2.2s\"></i>\n    </div>\n\n    <div class=\"register__inner wrap\">\n      <header class=\"register__head\" data-reveal>\n        <img class=\"register__logo\" src=\"assets/poster/logo-big.svg\" width=\"5925\" height=\"2870\" alt=\"Fidelity\">\n        <h2 class=\"register__title\" id=\"register-title\">Регистрация гостей</h2>\n        <p class=\"register__lead\">Оставьте контакты, и мы внесём вас в список гостей.</p>\n      </header>\n\n      <div class=\"card\" data-reveal>\n        <form class=\"form\" id=\"regForm\" novalidate>\n          <div class=\"form__fields\">\n            <div class=\"field field--full\">\n              <label class=\"field__label\" for=\"f-name\">ФИО</label>\n              <input class=\"field__input\" id=\"f-name\" name=\"name\" type=\"text\" required maxlength=\"120\" autocomplete=\"name\" autocapitalize=\"words\" enterkeyhint=\"next\" placeholder=\"Имя и фамилия\" aria-describedby=\"f-name-err\">\n              <p class=\"field__error\" id=\"f-name-err\"></p>\n            </div>\n\n            <div class=\"field\">\n              <label class=\"field__label\" for=\"f-position\">Должность</label>\n              <input class=\"field__input\" id=\"f-position\" name=\"position\" type=\"text\" required maxlength=\"120\" autocomplete=\"organization-title\" autocapitalize=\"sentences\" enterkeyhint=\"next\" placeholder=\"Например, CMO\" aria-describedby=\"f-position-err\">\n              <p class=\"field__error\" id=\"f-position-err\"></p>\n            </div>\n\n            <div class=\"field\">\n              <label class=\"field__label\" for=\"f-company\">Компания</label>\n              <input class=\"field__input\" id=\"f-company\" name=\"company\" type=\"text\" required maxlength=\"120\" autocomplete=\"organization\" enterkeyhint=\"next\" placeholder=\"Где вы работаете\" aria-describedby=\"f-company-err\">\n              <p class=\"field__error\" id=\"f-company-err\"></p>\n            </div>\n\n            <div class=\"field\">\n              <label class=\"field__label\" for=\"f-phone\">Номер телефона</label>\n              <input class=\"field__input\" id=\"f-phone\" name=\"phone\" type=\"tel\" required maxlength=\"22\" inputmode=\"tel\" autocomplete=\"tel\" enterkeyhint=\"next\" placeholder=\"+998 (90) 123-45-67\" aria-describedby=\"f-phone-err\">\n              <p class=\"field__error\" id=\"f-phone-err\"></p>\n            </div>\n\n            <div class=\"field\">\n              <label class=\"field__label\" for=\"f-telegram\">Telegram <span class=\"field__opt\">(если есть ник)</span></label>\n              <div class=\"field__control\">\n                <span class=\"field__prefix\" aria-hidden=\"true\">@</span>\n                <input class=\"field__input\" id=\"f-telegram\" name=\"telegram\" type=\"text\" maxlength=\"64\" autocomplete=\"off\" autocapitalize=\"off\" autocorrect=\"off\" spellcheck=\"false\" enterkeyhint=\"done\" placeholder=\"username\" aria-describedby=\"f-telegram-err\">\n              </div>\n              <p class=\"field__error\" id=\"f-telegram-err\"></p>\n            </div>\n\n            <fieldset class=\"field field--full choice\" aria-describedby=\"f-attendance-err\">\n              <legend class=\"field__label\">Вы придёте?</legend>\n              <div class=\"choice__options\">\n                <label class=\"choice__option\">\n                  <input class=\"sr-only\" type=\"radio\" name=\"attendance\" value=\"yes\" required>\n                  <span class=\"choice__box\"><i class=\"shape shape--bullet-1\" aria-hidden=\"true\"></i>Приду</span>\n                </label>\n                <label class=\"choice__option\">\n                  <input class=\"sr-only\" type=\"radio\" name=\"attendance\" value=\"no\">\n                  <span class=\"choice__box\"><i class=\"shape shape--cut\" aria-hidden=\"true\"></i>Не смогу</span>\n                </label>\n              </div>\n              <p class=\"field__error\" id=\"f-attendance-err\"></p>\n            </fieldset>\n          </div>\n\n          <!-- Ловушка для ботов: человек это поле не видит и не заполняет -->\n          <div class=\"form__trap\" aria-hidden=\"true\">\n            <label for=\"f-website\">Сайт</label>\n            <input id=\"f-website\" name=\"website\" type=\"text\" tabindex=\"-1\" autocomplete=\"off\">\n          </div>\n\n          <p class=\"form__alert\" id=\"regAlert\" role=\"alert\" hidden></p>\n\n          <button class=\"btn btn--block form__submit\" type=\"submit\" data-label-yes=\"Внести в список\" data-label-no=\"Отправить ответ\">Внести в список</button>\n          <p class=\"form__note\">Данные нужны только для списка гостей и связи по вечеринке.</p>\n        </form>\n\n        <div class=\"result\" id=\"regResult\" tabindex=\"-1\" hidden>\n          <div class=\"result__view\" data-view=\"yes\">\n            <i class=\"shape shape--bullet-1 result__icon\" aria-hidden=\"true\"></i>\n            <h3 class=\"result__title\">Вы в списке гостей</h3>\n            <p class=\"result__text\">До встречи 29 октября в 19:30, Nukus 89. Дресс-код: костюмы на Хэллоуин или одежда в чёрном и красном.</p>\n            <div class=\"result__actions\">\n              <a class=\"btn btn--ghost\" id=\"calLink\" href=\"#\" target=\"_blank\" rel=\"noopener\">В календарь</a>\n              <a class=\"btn btn--ghost\" href=\"https://yandex.uz/maps/?text=%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9D%D1%83%D0%BA%D1%83%D1%81%2C%2089\" target=\"_blank\" rel=\"noopener\">Открыть карту</a>\n            </div>\n          </div>\n          <div class=\"result__view\" data-view=\"no\">\n            <i class=\"shape shape--cut result__icon\" aria-hidden=\"true\"></i>\n            <h3 class=\"result__title\">Жаль, что без вас</h3>\n            <p class=\"result__text\">Спасибо, что предупредили. Если планы изменятся, отправьте форму ещё раз, мы обновим ответ.</p>\n          </div>\n          <button class=\"result__again\" type=\"button\" id=\"regAgain\">Заполнить ещё раз</button>\n        </div>\n\n        <noscript><p class=\"form__alert\">Чтобы отправить форму, включите JavaScript в браузере.</p></noscript>\n      </div>\n    </div>\n  </section>\n</main>\n\n<footer class=\"footer\">\n  <div class=\"wrap footer__inner\">\n    <img class=\"footer__logo\" src=\"assets/poster/logo.svg\" width=\"2661\" height=\"1289\" alt=\"Fidelity\">\n    <p>House of Fidelity / Ташкент</p>\n    <p><a href=\"https://yandex.uz/maps/?text=%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9D%D1%83%D0%BA%D1%83%D1%81%2C%2089\" target=\"_blank\" rel=\"noopener\">Nukus 89, открыть карту</a></p>\n    <p><a href=\"https://www.instagram.com/house.of.fidelity/\" target=\"_blank\" rel=\"noopener\">Instagram @house.of.fidelity</a></p>\n  </div>\n</footer>\n</div>".replace(/(["\s,])assets\//g, '$1' + base + 'assets/');
})();
/* ---- js/config.js ---- */
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

/* ---- js/phone.js ---- */
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

/* ---- js/validators.js ---- */
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

/* ---- js/api.js ---- */
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

/* ---- js/analytics.js ---- */
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

/* ---- js/form.js ---- */
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
          // Событие для пикселя только здесь: сервер подтвердил, что заявка записана
          if (FDL.analytics) FDL.analytics.registered(payload.attendance);
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

/* ---- js/page.js ---- */
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

/* ---- js/main.js ---- */
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
