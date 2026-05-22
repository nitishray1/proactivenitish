/* ============================================================
   MAIN.JS — Interactions & Animations
   nitishray.com / Proactive Nitish
   No dependencies. Vanilla JS only.
   ============================================================ */

'use strict';


/* ── UTILITIES ────────────────────────────────────────────── */

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const on = (el, event, handler, options) => {
  if (!el) return;
  el.addEventListener(event, handler, options);
};


/* ── NAV — scroll state & mobile drawer ──────────────────── */

const initNav = () => {
  const nav      = $('#nav');
  const toggle   = $('#navToggle');
  const drawer   = $('#navDrawer');
  const links    = $$('#navDrawer a, #navLinks a');

  if (!nav) return;

  // Scrolled state
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  };

  on(window, 'scroll', handleScroll, { passive: true });
  handleScroll(); // run on init

  // Mobile toggle
  on(toggle, 'click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close drawer on link click
  links.forEach(link => {
    on(link, 'click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close drawer on outside click
  on(document, 'click', (e) => {
    if (!nav.contains(e.target) && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape
  on(document, 'keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
};


/* ── REVEAL — scroll-triggered fade-in ───────────────────── */

const initReveal = () => {
  const elements = $$('.reveal');
  if (!elements.length) return;

  // Skip animation if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
};


/* ── FAQ — accordion ─────────────────────────────────────── */

const initFaq = () => {
  const items = $$('.faq__item');
  if (!items.length) return;

  items.forEach(item => {
    const question = $('.faq__question', item);
    const answer   = $('.faq__answer', item);

    if (!question || !answer) return;

    // Accessibility
    const id = `faq-${Math.random().toString(36).slice(2, 7)}`;
    answer.id = id;
    question.setAttribute('aria-controls', id);
    question.setAttribute('aria-expanded', 'false');
    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');

    const open = () => {
      // Close all others first
      items.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          close(other);
        }
      });

      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    };

    const close = (target = item) => {
      target.classList.remove('open');
      $('.faq__question', target)?.setAttribute('aria-expanded', 'false');
    };

    const toggle = () => {
      item.classList.contains('open') ? close() : open();
    };

    on(question, 'click', toggle);
    on(question, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
};


/* ── SMOOTH SCROLL — offset for fixed nav ────────────────── */

const initSmoothScroll = () => {
  const NAV_HEIGHT = 80;

  $$('a[href^="#"]').forEach(anchor => {
    on(anchor, 'click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = $(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      // Update URL without jump
      history.pushState(null, '', targetId);
    });
  });
};


/* ── ACTIVE NAV LINK — highlight current section ─────────── */

const initActiveNav = () => {
  const sections = $$('section[id]');
  const navLinks = $$('.nav__links a[href^="#"], .nav__drawer a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  sections.forEach(section => observer.observe(section));
};


/* ── MARQUEE — pause on touch ────────────────────────────── */

const initMarquee = () => {
  const track = $('.marquee__track');
  if (!track) return;

  on(track, 'touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  on(track, 'touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });
};


/* ── YEAR — auto-update copyright ───────────────────────── */

const initYear = () => {
  const el = $('#currentYear');
  if (el) el.textContent = new Date().getFullYear();
};


/* ── TESTIMONIALS CAROUSEL ───────────────────────────────── */

const initCarousel = () => {
  const track  = $('#testimonialsTrack');
  const dots   = $$('.testimonials__dot');
  if (!track || !dots.length) return;

  let current   = 0;
  let startX    = 0;
  let isDragging = false;
  const total   = dots.length;

  const goTo = (index) => {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  // Dot clicks
  dots.forEach((dot, i) => {
    on(dot, 'click', () => goTo(i));
  });

  // Touch / drag swipe
  on(track, 'mousedown', (e) => {
    startX    = e.clientX;
    isDragging = true;
  });

  on(track, 'touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  on(document, 'mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });

  on(track, 'touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  // Auto-advance every 6 seconds
  let autoplay = setInterval(() => goTo(current + 1), 6000);

  // Pause autoplay on interaction
  on(track, 'mousedown', () => clearInterval(autoplay));
  on(track, 'touchstart', () => clearInterval(autoplay), { passive: true });
};


/* ── INIT ─────────────────────────────────────────────────── */

const init = () => {
  initNav();
  initReveal();
  initFaq();
  initSmoothScroll();
  initActiveNav();
  initMarquee();
  initYear();
  initCarousel();
};

if (document.readyState === 'loading') {
  on(document, 'DOMContentLoaded', init);
} else {
  init();
}
