/* ═══════════════════════════════════════
   PROACTIVE NITISH — NAV JS
   Hamburger, scroll state, active links
═══════════════════════════════════════ */

(function () {
  'use strict';

  const nav    = document.getElementById('nav');
  const ham    = document.getElementById('nav-ham');
  const mob    = document.getElementById('mob-menu');
  const links  = document.querySelectorAll('.nav-links a');

  /* ── Scroll state ── */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on init

  /* ── Hamburger toggle ── */
  if (ham && mob) {
    ham.addEventListener('click', () => {
      const isOpen = mob.classList.toggle('open');
      ham.classList.toggle('open', isOpen);
      ham.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when a mobile link is tapped
    mob.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // Close on backdrop click (outside menu)
    document.addEventListener('click', e => {
      if (mob.classList.contains('open') &&
          !mob.contains(e.target) &&
          !ham.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mob.classList.contains('open')) closeMenu();
    });
  }

  function closeMenu() {
    mob.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ── Active nav link via IntersectionObserver ── */
  // Only runs on pages where sections have IDs matching nav hrefs
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && links.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            const href = link.getAttribute('href');
            const matches = href === `#${id}` || href.endsWith(`#${id}`);
            link.classList.toggle('active', matches);
          });
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach(s => sectionObserver.observe(s));
  }

})();
