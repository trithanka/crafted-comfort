/**
 * Crafted Comfort: tabs, trial-visit planner, enquiry forms and reveals.
 * Every page works without this file; it only adds behaviour.
 */

// Where enquiry forms POST to. Any service that accepts form data and answers
// JSON works (e.g. Formspree: 'https://formspree.io/f/<your-id>').
// Until this is set, forms say they could not send and offer the phone number.
const FORM_ENDPOINT = '';

const PHONE_DISPLAY = '+91 70992 79374';
const PHONE_LINK = 'tel:+917099279374';

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabs]').forEach(initTabs);
  initPlanner();
  document.querySelectorAll('form[data-enquiry]').forEach(initEnquiryForm);
  initReveals();
  initLoops();
  initYear();
  initHero();
});

/* --------------------------------------------------------------------------
   Tabs (WAI-ARIA tabs pattern, arrow keys move between tabs)
   -------------------------------------------------------------------------- */
function initTabs(root) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  if (!tabs.length) return;

  const select = (tab, focus = false) => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();

    // A tab may swap the picture that belongs to it.
    const img = root.querySelector('[data-tab-image]');
    if (img && tab.dataset.image) {
      img.src = tab.dataset.image;
      img.alt = tab.dataset.alt || '';
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', e => {
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        select(next, true);
      }
    });
  });

  select(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
}

/* --------------------------------------------------------------------------
   Trial-visit planner: pick a piece, see where to try it at the resort
   -------------------------------------------------------------------------- */
function initPlanner() {
  const planner = document.querySelector('[data-planner]');
  if (!planner) return;

  const where = planner.querySelector('[data-planner-where]');
  const time = planner.querySelector('[data-planner-time]');
  const ask = planner.querySelector('[data-planner-ask]');
  const radios = [...planner.querySelectorAll('input[type="radio"]')];

  const show = radio => {
    where.textContent = radio.dataset.where;
    time.textContent = radio.dataset.time;
    ask.dataset.piece = radio.value;
  };

  radios.forEach(r => r.addEventListener('change', () => show(r)));
  show(radios.find(r => r.checked) || radios[0]);

  ask.addEventListener('click', () => {
    const form = document.querySelector('#contact form');
    if (!form) return;
    const interest = form.querySelector('[name="Interest"]');
    if (interest) interest.value = 'Trial visit at Barefoot in the Garden';
    const notes = form.querySelector('[name="Notes"]');
    if (notes && !notes.value) notes.value = `I would like to try the ${ask.dataset.piece.toLowerCase()} at the resort.`;
  });
}

/* --------------------------------------------------------------------------
   Enquiry forms
   -------------------------------------------------------------------------- */
function initEnquiryForm(form) {
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  const label = submit.innerHTML;

  const say = (state, html) => {
    status.dataset.state = state;
    status.innerHTML = html;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Native validation first, with the first problem focused and announced.
    const invalid = [...form.elements].filter(el => el.willValidate && !el.checkValidity());
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
    if (invalid.length) {
      invalid.forEach(el => el.setAttribute('aria-invalid', 'true'));
      invalid[0].focus();
      const name = form.querySelector(`label[for="${invalid[0].id}"]`)?.textContent.trim() || 'a field';
      say('error', `Please fill in ${name.toLowerCase()}.`);
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    say('', '');

    const data = new FormData(form);
    data.append('Page', document.title);

    try {
      if (!FORM_ENDPOINT) throw new Error('FORM_ENDPOINT is not set in js/main.js');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error(`Form endpoint answered ${res.status}`);
      form.reset();
      say('ok', 'Thank you. Our Guwahati team will call you back within a working day.');
    } catch (err) {
      console.error('[enquiry form]', err);
      // Keep what they typed so nothing is lost.
      say('error', `Your request could not be sent. Please call us on <a href="${PHONE_LINK}">${PHONE_DISPLAY}</a> or try again.`);
    } finally {
      submit.disabled = false;
      submit.innerHTML = label;
    }
  });
}

/* --------------------------------------------------------------------------
   Reveals: each part of a section rises in turn, once
   -------------------------------------------------------------------------- */
function initReveals() {
  const items = document.querySelectorAll('.reveal, .shutter');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  // A shutter starts fully clipped, which reads as zero area to the
  // observer, so it is watched through its parent.
  const targets = new Map();
  items.forEach(el => {
    const watched = el.classList.contains('shutter') ? el.parentElement : el;
    targets.set(watched, [...(targets.get(watched) || []), el]);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      targets.get(entry.target).forEach(el => el.classList.add('is-in'));
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  targets.forEach((_, watched) => io.observe(watched));

  // Printing never scrolls, so show everything first.
  window.addEventListener('beforeprint', () => items.forEach(el => el.classList.add('is-in')));
}

/* --------------------------------------------------------------------------
   Looping clips: play only when motion is welcome, always pausable
   -------------------------------------------------------------------------- */
function initLoops() {
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('video[data-loop]').forEach(video => {
    const toggle = video.closest('figure')?.querySelector('[data-loop-toggle]');
    const set = playing => {
      if (!toggle) return;
      toggle.textContent = playing ? 'Pause' : 'Play';
      toggle.setAttribute('aria-pressed', String(!playing));
    };

    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener('click', () => {
        if (video.paused) video.play().catch(() => {});
        else video.pause();
      });
      video.addEventListener('play', () => set(true));
      video.addEventListener('pause', () => set(false));
    }

    set(false);
    if (still) return;
    // Start when it scrolls near, so the clip is not fetched for nothing.
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      video.play().catch(() => {});
      io.disconnect();
    }, { rootMargin: '200px 0px' });
    io.observe(video);
  });
}

function initYear() {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

// Home hero: the background follows the company in focus, and steps through them on its own.
function initHero() {
  const root = document.querySelector('[data-hero]');
  if (!root) return;
  const bgs = root.querySelectorAll('[data-hero-bg]');
  const items = root.querySelectorAll('[data-hero-item]');
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STEP = 5000;
  let current = 0;
  let timer;

  const show = n => {
    current = n;
    bgs.forEach(el => {
      const on = +el.dataset.heroBg === n;
      el.classList.toggle('is-on', on);
      if (el.tagName === 'VIDEO') on ? el.play().catch(() => {}) : el.pause();
    });
    items.forEach(a => {
      const on = +a.dataset.heroItem === n;
      a.classList.remove('is-on');
      if (on) {
        void a.offsetWidth; // restart the timer bar
        a.classList.add('is-on');
      }
    });
  };

  const next = () => show(current >= items.length ? 1 : current + 1);
  const play = () => {
    if (still) return;
    clearInterval(timer);
    timer = setInterval(next, STEP);
    root.classList.remove('is-paused');
  };
  const pause = () => {
    clearInterval(timer);
    root.classList.add('is-paused');
  };

  items.forEach(a => {
    const n = +a.dataset.heroItem;
    a.addEventListener('mouseenter', () => { show(n); pause(); });
    a.addEventListener('focus', () => { show(n); pause(); });
  });
  root.querySelector('.hero-x-list').addEventListener('mouseleave', play);
  root.querySelector('.hero-x-list').addEventListener('focusout', e => {
    if (!e.currentTarget.contains(e.relatedTarget)) play();
  });

  root.style.setProperty('--hero-step', STEP / 1000 + 's');
  if (!still) setTimeout(() => { show(1); play(); }, 2500);
}
