/* ═══════════════════════════════════════
   PROACTIVE NITISH — COMPONENTS
   Buttons, Tags, Cards, Chips
═══════════════════════════════════════ */

/* ─────────────────────────────────────
   BUTTONS
───────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  border: none;
  border-radius: var(--radius-sm);
  padding: 11px 22px;
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--transition), color var(--transition),
              border-color var(--transition), box-shadow var(--transition),
              transform var(--transition);
  letter-spacing: 0.01em;
  position: relative;
  text-decoration: none;
  line-height: 1;
}

.btn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.btn-dark {
  background: var(--ink);
  color: #fff;
}
.btn-dark:hover {
  background: var(--green);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-green {
  background: var(--green);
  color: #fff;
}
.btn-green:hover {
  background: var(--green-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  color: var(--ink-2);
  border: 1.5px solid var(--border-2);
}
.btn-outline:hover {
  border-color: var(--ink-3);
  background: var(--bg-2);
}

.btn-ghost-dark {
  background: rgba(255,255,255,.07);
  color: rgba(255,255,255,.75);
  border: 1.5px solid rgba(255,255,255,.14);
}
.btn-ghost-dark:hover {
  background: rgba(255,255,255,.14);
  border-color: rgba(255,255,255,.28);
}

.btn-lg {
  font-size: var(--text-base);
  padding: 13px 28px;
  border-radius: 8px;
}

.btn-sm {
  font-size: var(--text-xs);
  padding: 7px 14px;
  letter-spacing: 0.04em;
  font-weight: var(--weight-semibold);
}

/* ─────────────────────────────────────
   TAGS / CHIPS
───────────────────────────────────── */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ink-3);
  white-space: nowrap;
}

.tag-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

.tag-green {
  background: var(--green-light);
  border-color: var(--green-mid);
  color: var(--green-dark);
}

.tag-live .tag-dot {
  animation: blink 1.8s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ─────────────────────────────────────
   DAY CARD (hero visual)
───────────────────────────────────── */
.day-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-xl);
  position: relative;
}

.dc-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--border);
}

.dc-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--green-light);
  border: 1px solid var(--green-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.dc-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--ink);
}

.dc-sub {
  font-size: var(--text-xs);
  color: var(--ink-4);
  margin-top: 2px;
}

.dc-rows {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dc-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.dc-time {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-4);
  white-space: nowrap;
  padding-top: 4px;
  min-width: 50px;
}

.dc-chip {
  display: inline-flex;
  align-items: center;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  padding: 4px 12px;
  font-size: 0.8125rem;
  color: var(--ink-2);
  line-height: 1.4;
}

.dc-chip.chip-green {
  background: var(--green-light);
  border-color: var(--green-mid);
  color: var(--green-dark);
}

.dc-chip.chip-blue {
  background: var(--blue-light);
  border-color: var(--blue-mid);
  color: var(--blue-dark);
}

.dc-foot {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  font-size: var(--text-xs);
  color: var(--ink-4);
  font-style: italic;
  line-height: 1.65;
}

.float-pill {
  position: absolute;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 7px 13px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-2);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.fp-top   { top: -16px; right: 0; }
.fp-bottom { bottom: -12px; left: -12px; color: var(--green-dark); }

/* ─────────────────────────────────────
   VALUE ITEMS
───────────────────────────────────── */
.value-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-3);
}

.v-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.v-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  box-shadow: var(--shadow-xs);
}

.v-title {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--ink);
  margin-bottom: 3px;
}

.v-desc {
  font-size: var(--text-sm);
  color: var(--ink-3);
  line-height: 1.55;
}

/* ─────────────────────────────────────
   HONEST CARDS
───────────────────────────────────── */
.honest-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px 22px;
  box-shadow: var(--shadow-xs);
}

.honest-card.card-accent {
  background: var(--green-light);
  border-color: var(--green-mid);
}

.hcard-label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-4);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.hcard-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

.honest-card.card-accent .hcard-label {
  color: var(--green-dark);
}

.hcard-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9375rem;
  color: var(--ink);
  line-height: 1.65;
}

.honest-card.card-accent .hcard-text {
  color: var(--green-dark);
}

/* ─────────────────────────────────────
   PILLARS
───────────────────────────────────── */
.pillar-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.pillar {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px;
  transition: border-color var(--transition),
              box-shadow var(--transition),
              transform var(--transition);
}

.pillar:hover {
  border-color: var(--green-mid);
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.pillar-icon { font-size: 1.4rem; margin-bottom: 12px; }
.pillar-title {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--ink);
  margin-bottom: 6px;
}
.pillar-desc {
  font-size: var(--text-xs);
  color: var(--ink-3);
  line-height: 1.65;
}

/* ─────────────────────────────────────
   STEPS
───────────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  position: relative;
}

.steps-grid::before {
  content: '';
  position: absolute;
  top: 21px;
  left: calc(12.5% + 10px);
  right: calc(12.5% + 10px);
  height: 1px;
  background: var(--border-2);
  z-index: 0;
}

.step {
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-num {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 0 auto var(--space-5);
  background: var(--surface);
  border: 1.5px solid var(--green-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--green);
  box-shadow: var(--shadow-sm);
  letter-spacing: 0.04em;
}

.step-title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--ink);
  margin-bottom: var(--space-2);
}

.step-desc {
  font-size: var(--text-xs);
  color: var(--ink-3);
  line-height: 1.65;
}

/* ─────────────────────────────────────
   PRINCIPLES
───────────────────────────────────── */
.principle-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.principle {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.principle:hover {
  border-color: var(--green-mid);
  box-shadow: var(--shadow-sm);
}

.p-num {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background: var(--green-light);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--green-dark);
  letter-spacing: 0.04em;
}

.p-title {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 3px;
}

.p-desc {
  font-size: var(--text-xs);
  color: var(--ink-3);
  line-height: 1.55;
}

/* ─────────────────────────────────────
   WHO CARDS
───────────────────────────────────── */
.who-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.who-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: border-color var(--transition),
              box-shadow var(--transition),
              transform var(--transition);
}

.who-card:hover {
  border-color: var(--green-mid);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.who-icon  { font-size: 1.75rem; margin-bottom: 12px; }
.who-title { font-size: var(--text-base); font-weight: 600; color: var(--ink); margin-bottom: 8px; }
.who-desc  { font-size: var(--text-sm); color: var(--ink-3); line-height: 1.72; }

/* ─────────────────────────────────────
   TRUTH ROWS
───────────────────────────────────── */
.truth-stack {
  display: flex;
  flex-direction: column;
  margin-top: var(--space-8);
}

.truth-item {
  display: flex;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.truth-item:first-child { padding-top: 0; }
.truth-item:last-child  { border-bottom: none; }

.truth-emoji { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
.truth-title {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--ink);
  margin-bottom: 4px;
}
.truth-desc {
  font-size: var(--text-sm);
  color: var(--ink-3);
  line-height: 1.6;
}

/* ─────────────────────────────────────
   TRANSPARENCY BAR
───────────────────────────────────── */
.transparency-bar {
  background: var(--bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--green);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 14px 18px;
  margin-top: var(--space-5);
  font-size: var(--text-sm);
  color: var(--ink-3);
  line-height: 1.65;
  font-style: italic;
}

/* ─────────────────────────────────────
   INSTAGRAM POSTS
───────────────────────────────────── */
.post-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  transition: box-shadow var(--transition);
}

.post-card:hover { box-shadow: var(--shadow-sm); }

.post-type {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 6px;
}

.post-text {
  font-size: var(--text-sm);
  color: var(--ink-2);
  line-height: 1.62;
}

.post-text strong {
  color: var(--ink);
  font-weight: 500;
}

/* ─────────────────────────────────────
   CONTACT METHODS
───────────────────────────────────── */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  transition: border-color var(--transition),
              transform var(--transition),
              box-shadow var(--transition);
}

.contact-method:hover {
  border-color: var(--green-mid);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.cm-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--green-light);
  border: 1px solid var(--green-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  flex-shrink: 0;
}

.cm-main {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--ink);
}

.cm-sub {
  font-size: var(--text-xs);
  color: var(--ink-4);
  margin-top: 1px;
}

/* ─────────────────────────────────────
   CONTACT FORM
───────────────────────────────────── */
.form-box {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px;
  box-shadow: var(--shadow-md);
}

.form-box h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin-bottom: 6px;
  color: var(--ink);
}

.form-box > .form-desc {
  font-size: var(--text-sm);
  color: var(--ink-3);
  margin-bottom: 22px;
  line-height: 1.6;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.form-group input,
.form-group textarea,
.form-group select {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--ink);
  outline: none;
  width: 100%;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(42, 122, 80, .12);
}

.form-group textarea {
  resize: vertical;
  min-height: 84px;
}

.form-submit {
  width: 100%;
  background: var(--ink);
  color: #fff;
  border: none;
  padding: 13px;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background var(--transition), transform var(--transition);
}

.form-submit:hover {
  background: var(--green);
  transform: translateY(-1px);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* ─────────────────────────────────────
   FAQ
───────────────────────────────────── */
.faq-list {
  max-width: 760px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-btn {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 19px 0;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--ink);
  text-align: left;
  cursor: pointer;
  transition: color var(--transition);
}

.faq-btn:hover { color: var(--green); }

.faq-icon {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--bg-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition),
              border-color var(--transition),
              transform 0.3s var(--ease);
}

.faq-item.open .faq-icon {
  background: var(--green-light);
  border-color: var(--green-mid);
  transform: rotate(180deg);
}

.faq-icon svg {
  width: 12px;
  height: 12px;
  color: var(--ink-3);
  transition: color var(--transition);
}

.faq-item.open .faq-icon svg { color: var(--green-dark); }

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.38s var(--ease), padding 0.3s;
  font-size: var(--text-sm);
  color: var(--ink-2);
  line-height: 1.82;
}

.faq-item.open .faq-answer {
  max-height: 400px;
  padding-bottom: 20px;
}

/* ─────────────────────────────────────
   BOOK CARDS
───────────────────────────────────── */
.books-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.book-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.book-card:hover {
  border-color: var(--green-mid);
  box-shadow: var(--shadow-md);
}

.book-spine {
  width: 48px;
  height: 66px;
  flex-shrink: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.bs-green  { background: linear-gradient(160deg, #d1fae5, #6ee7b7); }
.bs-blue   { background: linear-gradient(160deg, #dbeafe, #93c5fd); }
.bs-amber  { background: linear-gradient(160deg, #fef3c7, #fcd34d); }
.bs-purple { background: linear-gradient(160deg, #ede9fe, #c4b5fd); }
.bs-rose   { background: linear-gradient(160deg, #ffe4e6, #fda4af); }
.bs-teal   { background: linear-gradient(160deg, #ccfbf1, #5eead4); }

.book-title  { font-size: var(--text-sm); font-weight: 600; color: var(--ink); margin-bottom: 2px; line-height: 1.35; }
.book-author { font-size: var(--text-xs); color: var(--ink-4); margin-bottom: 8px; }
.book-lesson { font-size: var(--text-xs); color: var(--ink-2); line-height: 1.65; }

.book-pill {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--green-light);
  color: var(--green-dark);
  padding: 3px 8px;
  border-radius: var(--radius-full);
  border: 1px solid var(--green-mid);
}

/* ─────────────────────────────────────
   CTA SECTION
───────────────────────────────────── */
.cta-section {
  background: var(--ink);
  border-top: 1px solid rgba(255,255,255,.05);
}

.cta-inner {
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}

.cta-eyebrow { color: var(--green-mid); margin-bottom: 20px; }

.cta-heading {
  font-family: var(--font-serif);
  font-weight: var(--weight-light);
  font-size: clamp(2rem, 3.8vw, 3.25rem);
  color: #fff;
  line-height: 1.12;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.cta-heading em {
  font-style: italic;
  color: var(--green-mid);
}

.cta-sub {
  font-size: var(--text-base);
  color: rgba(255,255,255,.55);
  line-height: 1.78;
  margin-bottom: 36px;
}

.cta-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-note {
  margin-top: 22px;
  font-size: var(--text-xs);
  color: rgba(255,255,255,.3);
  letter-spacing: 0.04em;
}

/* ─────────────────────────────────────
   RESPONSIVE — components
───────────────────────────────────── */
@media (max-width: 1024px) {
  .pillar-grid  { grid-template-columns: repeat(2, 1fr); }
  .books-grid   { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 840px) {
  .steps-grid       { grid-template-columns: 1fr 1fr; gap: 24px; }
  .steps-grid::before { display: none; }
  .who-grid         { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .pillar-grid   { grid-template-columns: 1fr; }
  .books-grid    { grid-template-columns: 1fr; }
  .steps-grid    { grid-template-columns: 1fr; }
  .who-grid      { grid-template-columns: 1fr; }
  .book-card     { flex-direction: column; }
  .cta-btns      { flex-direction: column; align-items: center; }
}
