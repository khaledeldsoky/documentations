---
name: claude-theme
description: >
  Generate dark-themed Arabic HTML documentation pages with Nagdy-inspired
  typography — Noto Sans Arabic for UI, Noto Naskh Arabic for prose, JetBrains
  Mono for code. Fully self-contained with embedded CSS, JS, and conventions.
  No external reference file needed.
---

## Embedded Design System

All CSS variables, component styles, light/dark mode, responsive rules, and
JavaScript are defined **inline in this skill**. You do not need a reference
HTML file.

---

## Required Structure

```
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>...</title>
  <style>  /* CSS below */  </style>
</head>
<body>
  <aside class="sidebar">  ...  </aside>
  <main class="main">
    <div class="cover">  ...  </div>
    <section class="section"> ... </section>
    ...
  </main>
</body>
</html>
```

---

## CSS — Copy this in full

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');

:root {
  --bg:           #0a0d12;
  --surface:      #0f1318;
  --surface2:     #141a22;
  --surface3:     #192030;
  --border:       #222c40;
  --border2:      #2a3850;
  --accent:       #4f8ef7;
  --accent2:      #00c2a8;
  --accent3:      #f0a500;
  --accent-red:   #e85555;
  --accent-green: #22c97a;
  --text:         #dce6f5;
  --text-dim:     #8899b5;
  --text-muted:   #4d607a;
  --code-bg:      #080b0f;
  --code-border:  #1a2233;

  --heavy1:       #1a2f4a; --heavy1-accent:#4f8ef7;
  --heavy2:       #1a3a2a; --heavy2-accent:#22c97a;
  --heavy3:       #2a1f3a; --heavy3-accent:#b87fff;

  --tag-h1-bg:    #1a2f4a; --tag-h1-fg: #7ab8ff;
  --tag-h2-bg:    #0f2a1a; --tag-h2-fg: #4de89a;
  --tag-h3-bg:    #221840; --tag-h3-fg: #c89fff;
  --tag-all-bg:   #1a1a2e; --tag-all-fg: #a0a8e8;

  --font-sans:    'Noto Sans Arabic', sans-serif;
  --font-serif:   'Noto Naskh Arabic', serif;
  --font-mono:    'JetBrains Mono', monospace;

  --text-body:    1.125rem;    --text-body--lh: 1.8;
  --text-prose:   1.0625rem;   --text-prose--lh: 1.9;
  --text-h1:      2rem;        --text-h1--lh:  1.2;
  --text-h2:      1.5rem;      --text-h2--lh:  1.35;
  --text-h3:      1.25rem;     --text-h3--lh:  1.5;
  --text-code:    0.8125rem;   --text-code--lh: 1.6;
  --text-body-sm: 0.875rem;    --text-body-sm--lh: 1.7;
  --text-small:   0.8125rem;   --text-small--lh: 1.35;
}

:root { color-scheme: dark; }

.light {
  --bg:           #f7f5f0;
  --surface:      #ffffff;
  --surface2:     #f0ede6;
  --surface3:     #e5e1d8;
  --border:       #d4cfc6;
  --border2:      #b8b2a8;
  --accent:       #3b82f6;
  --accent2:      #14b8a6;
  --accent3:      #f59e0b;
  --accent-red:   #ef4444;
  --accent-green: #22c55e;
  --text:         #1c1917;
  --text-dim:     #57534e;
  --text-muted:   #a8a29e;
  --code-bg:      #f7f5f0;
  --code-border:  #d4cfc6;
  --heavy1:       #ede4d4; --heavy1-accent:#3b82f6;
  --heavy2:       #dce8d4; --heavy2-accent:#22c55e;
  --heavy3:       #e6def0; --heavy3-accent:#a855f7;
  --tag-h1-bg:    #ede4d4; --tag-h1-fg: #2563eb;
  --tag-h2-bg:    #dce8d4; --tag-h2-fg: #16a34a;
  --tag-h3-bg:    #e6def0; --tag-h3-fg: #9333ea;
  --tag-all-bg:   #dedcf0; --tag-all-fg: #6366f1;
  color-scheme: light;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--text-body--lh);
  min-height: 100vh;
}

.prose {
  font-family: var(--font-serif);
  font-size: var(--text-prose);
  line-height: var(--text-prose--lh);
  color: var(--text-dim);
  margin-bottom: 1.15em;
}

h1, h2, h3, h4, h5, h6,
.section-title, .sub-title,
.sidebar, .sidebar *, .nav-item,
.cover h1, .cover .sub,
.sidebar-logo h1 {
  letter-spacing: 0;
}

/* ── SIDEBAR ── */
.sidebar {
  position: fixed; top: 0; right: 0;
  width: 265px; height: 100vh;
  background: var(--surface);
  border-left: 1px solid var(--border);
  overflow-y: auto; z-index: 100;
  display: flex; flex-direction: column;
}

.sidebar-logo {
  padding: 22px 18px 16px;
  border-bottom: 1px solid var(--border);
}

.sidebar-logo .eyebrow {
  font-family: var(--font-mono);
  font-size: 9.5px; color: var(--accent2);
  letter-spacing: .14em; text-transform: uppercase;
  margin-bottom: 7px;
}

.sidebar-logo h1 {
  font-size: var(--text-body-sm);
  font-weight: 600; color: var(--text);
  line-height: 1.45;
}

.sidebar nav { padding: 10px 0; flex: 1; }

.nav-group {
  padding: 14px 18px 5px;
  font-family: var(--font-sans);
  font-size: var(--text-small);
  color: var(--text-muted);
  letter-spacing: 0; text-transform: none;
}

.nav-item {
  display: block;
  padding: 6px 26px 6px 18px;
  color: var(--text-dim);
  text-decoration: none;
  font-size: var(--text-body-sm);
  border-right: 2px solid transparent;
  transition: all .12s; line-height: 1.55;
}

.nav-item.l1 { padding-right: 18px; font-weight: 500; font-size: var(--text-body-sm); }
.nav-item.l2 { padding-right: 30px; font-size: var(--text-code); }

.nav-item:hover,
.nav-item.active {
  color: var(--text);
  background: var(--surface2);
  border-right-color: var(--accent);
}

.sidebar-footer {
  padding: 12px 18px;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--text-muted);
  line-height: 1.65;
}

/* ── MAIN ── */
.main {
  margin-right: 265px;
  max-width: 940px;
  padding: 48px 56px 140px;
}

/* ── COVER ── */
.cover {
  margin-bottom: 60px;
  padding-bottom: 36px;
  border-bottom: 1px solid var(--border);
}

.cover .breadcrumb {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--text-muted);
  margin-bottom: 18px;
  letter-spacing: .06em;
}

.cover h1 {
  font-size: var(--text-h1);
  font-weight: 700; line-height: var(--text-h1--lh);
  color: var(--text); margin-bottom: 14px;
}

.cover h1 .hl { color: var(--accent2); }

.cover .sub {
  font-size: var(--text-body-sm);
  color: var(--text-dim); font-weight: 300;
  max-width: 600px; margin-bottom: 28px;
  line-height: var(--text-body-sm--lh);
}

.chip-row { display: flex; flex-wrap: wrap; gap: 8px; }

.chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 11px; border-radius: 5px;
  font-family: var(--font-mono);
  font-size: var(--text-small); font-weight: 600;
}

.chip-green  { background: #0c2018; color: var(--accent-green); border: 1px solid #1a4030; }
.chip-blue   { background: #0f1e38; color: var(--accent);       border: 1px solid #1e3a6a; }
.chip-amber  { background: #201400; color: var(--accent3);      border: 1px solid #4a3000; }
.chip-red    { background: #1f0a0a; color: var(--accent-red);   border: 1px solid #4a1010; }

/* ── SECTION ── */
.section { margin-bottom: 68px; }

.section-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 26px; padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
}

.section-num {
  display: flex; align-items: center; justify-content: center;
  min-width: 36px; height: 36px;
  background: var(--accent); border-radius: 7px;
  font-family: var(--font-mono);
  font-size: var(--text-body);
  font-weight: 700; color: #fff;
  flex-shrink: 0;
}

.section-title {
  font-size: var(--text-h2);
  font-weight: 600; line-height: var(--text-h2--lh);
  color: var(--text);
}

.subsection { margin-bottom: 34px; }

.sub-title {
  font-size: var(--text-h3);
  font-weight: 600; line-height: var(--text-h3--lh);
  color: var(--text-dim);
  margin-bottom: 12px;
  display: flex; align-items: center; gap: 8px;
}

.sub-title::before {
  content: '';
  display: inline-block;
  width: 3px; height: 15px;
  background: var(--accent2);
  border-radius: 2px; flex-shrink: 0;
}

/* ── NODE TAGS ── */
.node-tag {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 10px; border-radius: 5px;
  font-family: var(--font-mono);
  font-size: var(--text-small); font-weight: 700;
  letter-spacing: .07em; text-transform: uppercase;
  vertical-align: middle; margin-bottom: 10px;
}

.tag-all  { background: var(--tag-all-bg); color: var(--tag-all-fg); border: 1px solid #2a2a50; }
.tag-h1   { background: var(--tag-h1-bg);  color: var(--tag-h1-fg);  border: 1px solid #2a4880; }
.tag-h2   { background: var(--tag-h2-bg);  color: var(--tag-h2-fg);  border: 1px solid #1a4830; }
.tag-h3   { background: var(--tag-h3-bg);  color: var(--tag-h3-fg);  border: 1px solid #3a2868; }

/* ── CODE BLOCKS ── */
.code-block {
  background: var(--code-bg);
  border: 1px solid var(--code-border);
  border-radius: 9px;
  margin: 10px 0 20px;
  overflow: hidden;
}

.code-block.h1 { border-color: var(--heavy1-accent); }
.code-block.h2 { border-color: var(--heavy2-accent); }
.code-block.h3 { border-color: var(--heavy3-accent); }

.cb-head {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 7px 14px;
  background: #0e141e;
  border-bottom: 1px solid var(--code-border);
}

.code-block.h1 .cb-head { background: var(--heavy1); border-bottom-color: var(--heavy1-accent); }
.code-block.h2 .cb-head { background: var(--heavy2); border-bottom-color: var(--heavy2-accent); }
.code-block.h3 .cb-head { background: var(--heavy3); border-bottom-color: var(--heavy3-accent); }

.cb-label {
  font-family: var(--font-mono);
  font-size: var(--text-code);
  color: var(--text-muted);
  letter-spacing: .08em;
}

.cb-dots { display: flex; gap: 5px; }
.cb-dots span { width: 9px; height: 9px; border-radius: 50%; }
.cb-dots span:nth-child(1) { background: #ff5f57; }
.cb-dots span:nth-child(2) { background: #ffbd2e; }
.cb-dots span:nth-child(3) { background: #28c840; }

.code-block pre {
  padding: 16px 20px;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: var(--text-code);
  line-height: var(--text-code--lh);
  color: #c9d1d9;
  direction: ltr; text-align: left;
}

.code-block pre .cm  { color: #6a9955; unicode-bidi: plaintext; }
.code-block pre .cm[dir="ltr"] { unicode-bidi: embed; direction: ltr; }
.code-block pre .kw  { color: #ff7b72; }
.code-block pre .val { color: #d2a8ff; }
.code-block pre .str { color: #a5d6ff; }
.code-block pre .ph  { color: var(--accent3); }

code {
  direction: ltr; unicode-bidi: isolate;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  background: var(--surface3);
  color: #7dd3fc;
  padding: 1px 6px; border-radius: 3px;
}

/* ── ARCH BOX ── */
.arch-box {
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 10px 14px;
  margin: 8px 0;
  font-family: var(--font-mono);
  font-size: var(--text-code);
  line-height: 1.65;
  direction: ltr;
  text-align: left;
  background: var(--code-bg);
  overflow-x: auto;
}
.arch-box .ab-row {
  padding: 1px 0;
  white-space: nowrap;
}
.arch-box .ab-hl { color: #2a9a78; font-weight: 600; }
.arch-box .ab-accent { color: #3a6a9a; font-weight: 600; }
.arch-box .ab-dim { color: #4d607a; }
.arch-box .ab-dir { color: #5a8aaa; }
.arch-box .ab-comment { color: #6a9955; }
.arch-box > .arch-box { margin: 6px 0 2px; border-color: #2a4a6a; }
.arch-box > .arch-box > .arch-box { border-color: #1a3a5a; }

.light .arch-box .ab-hl { color: #1a6a50; }
.light .arch-box .ab-accent { color: #2a5070; }
.light .arch-box .ab-dim { color: #3a4a5a; }
.light .arch-box .ab-dir { color: #4a6a8a; }
.light .arch-box .ab-comment { color: #5a8a4a; }

/* ── CALLOUTS ── */
.callout {
  display: flex; gap: 12px;
  padding: 13px 16px;
  border-radius: 7px;
  margin: 14px 0;
  font-size: var(--text-body-sm);
  line-height: var(--text-body-sm--lh);
}

.callout-icon { font-size: 15px; flex-shrink: 0; margin-top: 1px; }

.callout.info    { background: #0a1828; border: 1px solid #1a3a5a; color: #7dd3fc; }
.callout.warn    { background: #1a1000; border: 1px solid #4a3000; color: #fcd34d; }
.callout.danger  { background: #1a0808; border: 1px solid #4a1010; color: #fca5a5; }
.callout.success { background: #081a10; border: 1px solid #1a4028; color: #6ee7b7; }

/* ── VERIFY ── */
.verify {
  background: #081a10;
  border: 1px solid #1a4028;
  border-radius: 7px;
  padding: 13px 16px;
  margin: 14px 0 24px;
}

.verify .v-label {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--accent-green);
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 6px;
  display: flex; align-items: center; gap: 6px;
}

.verify .v-label::before { content: '\2713'; font-size: var(--text-small); }

.verify p {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: #6ee7b7;
  line-height: 1.7;
}

.verify p[dir="ltr"] { text-align: left; }

.verify div.mono-text {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: #6ee7b7; line-height: 1.7;
}

.mono-table {
  width: 100%; border-collapse: collapse;
  font-size: var(--text-small);
  color: #6ee7b7; font-family: var(--font-mono);
}

.mono-table td {
  padding: 4px 8px;
  border: 1px solid #1a4028;
}

/* ── BENEFIT CARDS ── */
.benefit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 20px 0 30px;
}

.benefit-card {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 9px;
  padding: 18px 20px;
}

.benefit-card .bc-icon {
  font-size: 20px;
  margin-bottom: 8px;
  display: block;
}

.benefit-card .bc-title {
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--text);
  margin-bottom: 7px;
}

.benefit-card .bc-body {
  font-size: var(--text-small);
  color: var(--text-dim);
  line-height: 1.7;
}

.benefit-card.danger {
  border-color: #5a1515;
  background: #1a0a0a;
}

.benefit-card.danger .bc-title { color: var(--accent-red); }

/* ── STEP LIST ── */
.step-list { counter-reset: steps; list-style: none; padding: 0; margin: 10px 0 18px; }

.step-list li {
  counter-increment: steps;
  display: flex; gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
  color: var(--text-dim);
}

.step-list li > div { flex: 1; min-width: 0; }

.step-list li strong {
  display: block;
  color: var(--accent);
  font-weight: 600;
  font-size: var(--text-body-sm);
  line-height: 1.5;
  margin-bottom: 1px;
}

.step-list li .desc {
  display: block;
  font-size: var(--text-code);
  line-height: 1.7;
  color: var(--text-dim);
}

.step-list li .desc::before { content: '\2022 '; color: var(--text-muted); }

.step-list li::before {
  content: counter(steps);
  display: flex; align-items: center; justify-content: center;
  min-width: 22px; height: 22px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 50%;
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--accent2);
  font-weight: 700;
  margin-top: 2px; flex-shrink: 0;
}

/* ── INFO TABLE ── */
.info-table {
  width: 100%; border-collapse: collapse;
  margin: 14px 0 24px;
  font-size: var(--text-body-sm);
  line-height: 1.8;
}

.info-table th {
  text-align: right;
  padding: 12px 16px;
  background: var(--surface2);
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: var(--text-body-sm);
  text-transform: uppercase;
  letter-spacing: .1em;
  border-bottom: 1px solid var(--border);
}

.info-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text-dim);
  vertical-align: top;
}

.info-table tr:hover td { background: var(--surface2); }
.info-table td code { font-size: var(--text-body-sm); }

/* ── DIVIDER ── */
hr.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 56px 0;
}

/* ── PUNCTUATION ── */
.punct { font-weight: 700; }

/* ── THEME TOGGLE ── */
.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-dim);
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: .12s;
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* ── LIGHT MODE OVERRIDES ── */
.light .chip-green  { background: #eaf5ea; border-color: #86efac; }
.light .chip-blue   { background: #eaf1fa; border-color: #93c5fd; }
.light .chip-amber  { background: #faf5ea; border-color: #fde68a; }
.light .chip-red    { background: #faeaea; border-color: #fca5a5; }

.light .tag-all  { border-color: #a5b4fc; }
.light .tag-h1   { border-color: #818cf8; }
.light .tag-h2   { border-color: #6ee7b7; }
.light .tag-h3   { border-color: #c4b5fd; }

.light .cb-head  { background: var(--surface2); }

.light .code-block pre     { color: #1e293b; }
.light .code-block pre .cm { color: #6a9955; }
.light .code-block pre .kw { color: #991b1b; }
.light .code-block pre .val{ color: #6b21a8; }
.light .code-block pre .str{ color: #1e3a8a; }
.light code { color: #1e3a8a; }

.light .callout.info    { background: #eaf1fa; border-color: #93c5fd; color: #1e40af; }
.light .callout.warn    { background: #faf5ea; border-color: #fde68a; color: #92400e; }
.light .callout.danger  { background: #faeaea; border-color: #fca5a5; color: #991b1b; }
.light .callout.success { background: #eaf5ea; border-color: #86efac; color: #166534; }

.light .verify { background: #eaf5ea; border-color: #86efac; }
.light .verify p,
.light .verify div.mono-text,
.light .mono-table { color: #16a34a; }
.light .mono-table td { border-color: #86efac; }

.light .benefit-card.danger { border-color: #fca5a5; background: #faeaea; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .sidebar { display: none; }
  .main { margin-right: 0; padding: 24px 20px 80px; }
  .benefit-grid { grid-template-columns: 1fr; }
}

/* ── PRINT ── */
@media print {
  .sidebar {
    position: static; float: right;
    width: 280px; height: auto;
    border-left: none; border-right: 1px solid var(--border);
  }
  .sidebar nav { font-size: 11px; }
  .sidebar-logo { padding: 12px 14px; }
  .sidebar-logo .eyebrow { font-size: 8px; }
  .sidebar-logo h1 { font-size: 13px; }
  .nav-group { padding: 8px 14px 3px; font-size: 9px; }
  .nav-item { padding: 4px 14px; font-size: 11px; }
  .sidebar-footer { display: none; }
  .theme-toggle { display: none; }
  .main {
    margin-right: 0; overflow: hidden;
    padding: 24px 36px; max-width: none;
  }
  .code-block { break-inside: avoid; }
  .section, .subsection, .callout, .verify, .benefit-grid { page-break-inside: avoid; }
  .cover { page-break-after: avoid; }
}
```

---

## Components — HTML Patterns

| Component | Pattern | Notes |
|---|---|---|
| **Cover** | `.cover > .breadcrumb + h1 (+ .hl span) + .sub + .chip-row` | Top of every page |
| **Section** | `section.section#id > .section-header > .section-num + h2.section-title` | `.section-num` can be number or icon |
| **Subsection** | `.subsection > .sub-title` | Green accent bar via `::before` |
| **Node tag** | `span.node-tag.tag-h1/.tag-h2/.tag-h3/.tag-all` | Colored per-node scoping |
| **Code block** | `.code-block` (opt `.h1/.h2/.h3`) > `.cb-head` (`.cb-label` + `.cb-dots`) + `pre` | Syntax spans: `.cm`, `.kw`, `.val`, `.str`, `.ph` |
| **Callout** | `.callout.info/.warn/.danger/.success` > `.callout-icon` + `div` | Icon + rich text |
| **Verify** | `.verify` > `.v-label` + `p` | Green-bordered checkmark box |
| **Benefit card** | `.benefit-grid` > `.benefit-card` (opt `.danger`) > `.bc-icon` + `.bc-title` + `.bc-body` | 2-column grid |
| **Step list** | `ol.step-list` > `li > div > strong + span.desc` | Auto-numbered via CSS counter |
| **Info table** | `table.info-table` > `thead > tr > th` + `tbody > tr > td` | Hover highlight |
| **Mono table** | `.mono-table` | Inside `.verify` for tabular output |
| **Delta table** | `table.delta-table` > td `.added` / `.removed` | Before/after comparisons |
| **Arch box** | `.arch-box` > `.ab-row` with `.ab-hl/.ab-accent/.ab-dim/.ab-dir/.ab-comment` | HTML/CSS nested borders; no Arabic alignment issues |
| **Chip** | `span.chip.chip-green/.chip-blue/.chip-amber/.chip-red` | In `.chip-row` |
| **Divider** | `hr.divider` | Section separator |
| **Inline code** | `<code>` | JetBrains Mono, blue tint, LTR-isolated |
| **Theme toggle** | `button#theme-toggle.theme-toggle` in `.sidebar-logo` | Toggles `.light` on `<html>`, saves to localStorage |
| **Sidebar** | `.sidebar > .sidebar-logo + nav + .sidebar-footer` | Fixed position, right side |

---

## Arabic RTL Conventions

| Aspect | Rule |
|---|---|
| HTML | `<html lang="ar" dir="rtl">` |
| Sidebar DOM | `<main>` first, `<aside class="sidebar">` after |
| Body text | All `text-align: right;` |
| Heading `letter-spacing` | Always `0` |
| Paragraphs | `<p class="prose">` — never inline styles |
| Code direction | `<code>` / `<pre>` must be `direction: ltr; unicode-bidi: isolate;` |
| Code comments | `.cm { unicode-bidi: plaintext; }` — add `dir="ltr"` when first strong char is Latin/digit |
| Verify English text | `<p dir="ltr">` + CSS `.verify p[dir="ltr"] { text-align: left; }` |
| Q&A in callouts/verify | `<br>` after question, answer prefixed with `<span class="punct">\2022 </span>` |
| Colon-list break | `<br>` after colon when introducing a multi-item list |
| Sticky note callout | `.callout.sticky` for sidebar-like `position: sticky` tips |

**Determining first strong character:** Look at the first non-`# ` character of a comment line:
- Arabic letter (ا, ب, ت, ز, ف, ك, م, إ, etc.) → Arabic → no `dir`
- Latin letter (a, b, c, C, S, X, E, etc.) or digit (2, 5, 8) → LTR → add `dir="ltr"`

**Sidebar group labels:** Arabic group headers include English translation:
`النظام — System`, `الشبكات — Network`, `التخزين — Storage`,
`الخدمات — Services`, `الأداء — Performance`

---

## Punctuation Readability (Arabic)

Wrap punctuation marks in bold spans with spaces for visual clarity in Arabic prose:
- CSS `.punct { font-weight: 700; }` (already in the CSS above)
- Wrap each punctuation char as `<span class="punct"> , </span>` (space + char + space)
- **Only apply to natural-language sentence text** — NOT to code identifiers, file paths, or technical expressions
- **Skip:** content inside `<pre>`, `<code>`, `<style>`, `<script>`, `<div class="ab-row">` tags
- **Avoid:** wrapping `&` or `;` inside HTML entities (`&amp;`, `&gt;`, `&lt;`)

The script below skips punctuation that is between alphanumeric characters (e.g., `.` in `Node.js` stays unwrapped) so code identifiers are never corrupted.

**Script** (run after writing the HTML):
```python
# /tmp/punctify_v2.py — run with: python3 /tmp/punctify_v2.py file.html
import re, sys
html = open(sys.argv[1], encoding='utf-8').read()
saved = {}
def save(m, p):
    i = len([k for k in saved if p in k])
    ph = f'@@PUNCT_SAVED_{p}_{i}@@'; saved[ph] = m.group(0); return ph
html = re.sub(r'<pre[^>]*>.*?</pre>', lambda m: save(m,'PRE'), html, flags=re.DOTALL)
html = re.sub(r'<style[^>]*>.*?</style>', lambda m: save(m,'STYLE'), html, flags=re.DOTALL)
html = re.sub(r'<code>.*?</code>', lambda m: save(m,'CODE'), html, flags=re.DOTALL)
html = re.sub(r'<script[^>]*>.*?</script>', lambda m: save(m,'SCRIPT'), html, flags=re.DOTALL)
html = re.sub(r'<div[^>]*class="[^"]*\bab-row\b[^"]*"[^>]*>.*?</div>',
              lambda m: save(m,'ABROW'), html, flags=re.DOTALL)
html = re.sub(r'&[a-zA-Z]+;', lambda m: save(m,'ENT'), html)
punct = set('\u060c.,!؟?;:؛()[]""\'\u201c\u201d\u2018\u2019\u061b\u061f\u2013\u2014')
def wrap(t):
    result = []
    for i, c in enumerate(t):
        if c in punct:
            before = t[i-1] if i > 0 else ' '
            after = t[i+1] if i < len(t)-1 else ' '
            if before.isalnum() and after.isalnum():
                result.append(c)
            else:
                result.append(f'<span class="punct"> {c} </span>')
        else:
            result.append(c)
    return ''.join(result)
html = re.sub(r'(>)([^<]*?)(<)', lambda m: m[1]+wrap(m[2])+m[3], html)
html = re.sub(r'^([^<]*?)(<)', lambda m: wrap(m[1])+m[2], html)
html = re.sub(r'(>)([^>]*?)$', lambda m: m[1]+wrap(m[2]), html)
for ph, orig in reversed(list(saved.items())): html = html.replace(ph, orig)
open(sys.argv[1], 'w', encoding='utf-8').write(html)
```

Note: The punctify script now includes `<script>` in the skip list to prevent mangling JavaScript.

---

## JavaScript — Active Nav Tracking

Include before `</body>`. Adds `.active` class to sidebar links based on
scroll position via `IntersectionObserver`:

```html
<script>
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-item');
if (sections.length && navLinks.length) {
  const navMap = {};
  navLinks.forEach(a => {
    const id = a.getAttribute('href')?.replace('#', '');
    if (id) navMap[id] = a;
  });
  const obs = new IntersectionObserver(entries => {
    let best = null, bestRatio = 0;
    entries.forEach(e => {
      if (e.intersectionRatio > bestRatio) { best = e.target.id; bestRatio = e.intersectionRatio; }
    });
    navLinks.forEach(a => a.classList.remove('active'));
    if (best && navMap[best]) navMap[best].classList.add('active');
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
  sections.forEach(s => obs.observe(s));
}
</script>
```

---

## JavaScript — Theme Toggle

Include after the active nav block, before `</body>`:

```html
<script>
const savedTheme = localStorage.getItem('claude-guide-theme');
if (savedTheme === 'light') document.documentElement.classList.add('light');

const btn = document.getElementById('theme-toggle');
if (btn) {
  btn.textContent = document.documentElement.classList.contains('light') ? '\u2600\ufe0f' : '\U0001f319';
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    const isLight = document.documentElement.classList.contains('light');
    btn.textContent = isLight ? '\u2600\ufe0f' : '\U0001f319';
    localStorage.setItem('claude-guide-theme', isLight ? 'light' : 'dark');
  });
}
</script>
```

Place the toggle button in `.sidebar-logo`:
```html
<button id="theme-toggle" class="theme-toggle" style="margin-top:0;flex-shrink:0;">\U0001f319</button>
```

---

## Additional Rules

- **Nav levels:** `.nav-item.l1` uses `var(--text-body-sm)` (500 weight), `.l2` uses `var(--text-code)`
- **Numbering:** Sections numbered sequentially (1, 2, 3...). Subsections can be unnumbered.
- **IDs:** Each section needs an `id` matching its anchor link in the sidebar nav
- **Rem-only:** Every `font-size` in CSS uses `var(--text-*)` — no hardcoded `px` except icons (`.callout-icon`, `.bc-icon`, `.cb-dots`)
- **No inline styles:** Never use inline `font-size`/`line-height`/`color` on `<p>` — use `class="prose"`
- **Benefit-card code LTR:** Multi-word `<code>` in `.bc-body` gets `dir="ltr"`
- **Inline code in headings:** `<code>` inside Arabic headings stays LTR via `unicode-bidi: isolate; direction: ltr;`
- **List items after colon:** When a colon in `.prose` text introduces a multi-item list, insert `<br>` after the colon to start list on a new line
- **Q&A answer format:** Prefix answer with `<span class="punct">\2022 </span>` and separate from question with `<br>`

---

## Process

1. Ask the user for: document title, sections/content, and any per-node scoping
2. Generate a single self-contained `.html` file using the CSS, component patterns, and conventions above
3. Apply punctuation wrapping via `/tmp/punctify_v2.py` (the script above, which skips `<pre>`, `<code>`, `<style>`, and `<script>`)
4. Read the file back and verify all tags are closed and classes match the conventions
