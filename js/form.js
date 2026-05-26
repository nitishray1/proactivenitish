/* ═══════════════════════════════════════
   PROACTIVE NITISH — BLOG FILTER JS
   Category filtering on blog listing page
═══════════════════════════════════════ */

(function () {
  'use strict';

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('[data-category]');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const cardCat = card.dataset.category;
        const show    = cat === 'all' || cardCat === cat;

        if (show) {
          card.style.display = '';
          // Re-observe for reveal animation if needed
          if (window.__revealObserver) {
            card.classList.remove('in');
            window.__revealObserver.observe(card);
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

})();


/* ═══════════════════════════════════════
   POST TOC — Table of contents
   Highlights active heading while reading
═══════════════════════════════════════ */

(function () {
  'use strict';

  const tocLinks = document.querySelectorAll('.toc-link');
  if (!tocLinks.length) return;

  const headings = document.querySelectorAll('.post-content h2, .post-content h3');
  if (!headings.length) return;

  // Add IDs to headings automatically
  headings.forEach((h, i) => {
    if (!h.id) {
      h.id = `heading-${i}`;
    }
  });

  // Map toc links to heading IDs
  tocLinks.forEach((link, i) => {
    if (headings[i]) {
      link.href = `#${headings[i].id}`;
    }
  });

  // IntersectionObserver to highlight current section
  const headingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(link => {
          link.classList.toggle('active', link.href.endsWith(`#${id}`));
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -75% 0px',
    threshold: 0,
  });

  headings.forEach(h => headingObserver.observe(h));

})();


/* ═══════════════════════════════════════
   SHARE BUTTONS
═══════════════════════════════════════ */

(function () {
  'use strict';

  const shareWA = document.getElementById('share-wa');
  if (shareWA) {
    shareWA.addEventListener('click', () => {
      const text = `Interesting read from Proactive Nitish: ${document.title}\n${window.location.href}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
  }

  const shareCopy = document.getElementById('share-copy');
  if (shareCopy) {
    shareCopy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const orig = shareCopy.textContent;
        shareCopy.textContent = '✓ Copied!';
        setTimeout(() => { shareCopy.textContent = orig; }, 2000);
      } catch {
        // Fallback: select a hidden input
        shareCopy.textContent = window.location.href;
      }
    });
  }

})();
