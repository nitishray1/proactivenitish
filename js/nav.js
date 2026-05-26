/* ═══════════════════════════════════════
   PROACTIVE NITISH — DESIGN TOKENS
   All variables live here.
═══════════════════════════════════════ */

:root {

  /* ── Colour Palette ── */
  --bg:          #faf9f6;
  --bg-2:        #f3f1ec;
  --bg-3:        #eae7e0;
  --surface:     #ffffff;

  --ink:         #15120b;
  --ink-2:       #3a3628;
  --ink-3:       #78726a;
  --ink-4:       #b4ada5;

  --border:      #e3dfd8;
  --border-2:    #cec9c0;

  --green:       #2a7a50;
  --green-hover: #1e5e3c;
  --green-light: #e6f4ed;
  --green-mid:   #a3d4bb;
  --green-dark:  #185234;

  --amber:       #c07d28;
  --amber-light: #fdf3e2;

  --blue-light:  #eef2ff;
  --blue-mid:    #c7d4fe;
  --blue-dark:   #3346b2;

  /* ── Typography ── */
  --font-serif:  'Instrument Serif', Georgia, serif;
  --font-sans:   'Outfit', system-ui, sans-serif;

  --text-xs:     0.6875rem;   /* 11px */
  --text-sm:     0.8125rem;   /* 13px */
  --text-base:   1rem;        /* 16px */
  --text-lg:     1.125rem;    /* 18px */
  --text-xl:     1.375rem;    /* 22px */

  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;

  /* ── Spacing ── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-28:  112px;

  /* ── Radii ── */
  --radius-xs:  4px;
  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  18px;
  --radius-xl:  26px;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-xs: 0 1px 2px rgba(21,18,11,.04);
  --shadow-sm: 0 2px 8px rgba(21,18,11,.06);
  --shadow-md: 0 6px 24px rgba(21,18,11,.08);
  --shadow-lg: 0 16px 48px rgba(21,18,11,.10);
  --shadow-xl: 0 32px 80px rgba(21,18,11,.12);

  /* ── Transitions ── */
  --ease:        cubic-bezier(.4,0,.2,1);
  --transition:  .22s cubic-bezier(.4,0,.2,1);
  --transition-slow: .4s cubic-bezier(.4,0,.2,1);

  /* ── Layout ── */
  --nav-h:       66px;
  --max-w:       1140px;
  --max-w-narrow: 780px;
  --max-w-post:  720px;
  --gutter:      32px;

  /* ── Section spacing ── */
  --section-y:   112px;
  --section-y-sm: 80px;
}

@media (max-width: 640px) {
  :root {
    --nav-h:    58px;
    --gutter:   20px;
    --section-y: 80px;
    --section-y-sm: 60px;
  }
}
