// ============ Chartered Automation — front-end interactivity ============
(function () {
  'use strict';

  var C = window.SITE_CONTENT;

  /* =====================================================================
     PART 1 — Fill the page with the text from content.js
     ===================================================================== */

  // Small helper to create an element with a class and text
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Set the text of an element by id (only if both exist)
  function setText(id, value) {
    var node = document.getElementById(id);
    if (node && value != null) node.textContent = value;
  }

  function renderContent() {
    if (!C) {
      console.warn('content.js did not load — page text is empty.');
      return;
    }

    /* ---- Page title, meta description, brand name ---- */
    if (C.site) {
      if (C.site.title) document.title = C.site.title;
      var meta = document.getElementById('meta-description');
      if (meta && C.site.description) meta.setAttribute('content', C.site.description);
    }
    if (C.brand) {
      document.querySelectorAll('[data-brand]').forEach(function (n) {
        n.textContent = C.brand.wordOne + ' ';
        n.appendChild(el('span', null, C.brand.wordTwo));
      });
      document.querySelectorAll('[data-brand-plain]').forEach(function (n) {
        n.textContent = C.brand.wordOne + ' ' + C.brand.wordTwo;
      });
    }

    /* ---- Hero ---- */
    if (C.hero) {
      setText('hero-eyebrow', C.hero.eyebrow);
      var h1 = document.getElementById('hero-heading');
      if (h1) {
        h1.textContent = C.hero.headingMain + ' ';
        h1.appendChild(el('span', 'grad', C.hero.headingAccent));
      }
      setText('hero-subtext', C.hero.subtext);
      setText('hero-btn-primary', C.hero.buttonPrimary);
      setText('hero-btn-secondary', C.hero.buttonSecondary);
      setText('hero-trust-label', C.hero.trustLabel);
      setText('hero-trust-line', C.hero.trustLine);
    }

    /* ---- Stats band ---- */
    var statsGrid = document.getElementById('stats-grid');
    if (statsGrid && C.stats) {
      C.stats.forEach(function (s) {
        var wrap = el('div', 'stat reveal');
        var b = el('b', null, '0');
        b.setAttribute('data-count', s.number);
        wrap.appendChild(b);
        wrap.appendChild(el('span', null, s.label));
        statsGrid.appendChild(wrap);
      });
    }

    /* ---- Services ---- */
    if (C.services) {
      setText('services-eyebrow', C.services.eyebrow);
      setText('services-title', C.services.title);
      setText('services-subtitle', C.services.subtitle);
      var sGrid = document.getElementById('services-grid');
      if (sGrid && C.services.items) {
        C.services.items.forEach(function (it) {
          var card = el('article', 'card feature reveal');
          card.appendChild(el('div', 'ico', it.icon));
          card.appendChild(el('h3', null, it.title));
          card.appendChild(el('p', null, it.text));
          sGrid.appendChild(card);
        });
      }
    }

    /* ---- How it works ---- */
    if (C.how) {
      setText('how-eyebrow', C.how.eyebrow);
      setText('how-title', C.how.title);
      var steps = document.getElementById('steps-list');
      if (steps && C.how.steps) {
        C.how.steps.forEach(function (st, i) {
          var li = el('li', 'step reveal');
          li.appendChild(el('span', 'step-no', String(i + 1)));
          li.appendChild(el('h3', null, st.title));
          li.appendChild(el('p', null, st.text));
          steps.appendChild(li);
        });
      }
    }

    /* ---- Benefits ---- */
    if (C.benefits) {
      setText('benefits-eyebrow', C.benefits.eyebrow);
      setText('benefits-title', C.benefits.title);
      setText('benefits-text', C.benefits.text);
      setText('benefits-btn', C.benefits.button);
      setText('before-title', C.benefits.beforeTitle);
      setText('after-title', C.benefits.afterTitle);
      var fill = function (id, arr) {
        var ul = document.getElementById(id);
        if (ul && arr) arr.forEach(function (t) { ul.appendChild(el('li', null, t)); });
      };
      fill('benefits-checklist', C.benefits.checklist);
      fill('before-list', C.benefits.beforeList);
      fill('after-list', C.benefits.afterList);
    }

    /* ---- Testimonials ---- */
    if (C.testimonials) {
      setText('testimonials-eyebrow', C.testimonials.eyebrow);
      setText('testimonials-title', C.testimonials.title);
      var tGrid = document.getElementById('testimonials-grid');
      if (tGrid && C.testimonials.items) {
        C.testimonials.items.forEach(function (t) {
          var bq = el('blockquote', 'card quote reveal');
          bq.appendChild(el('p', null, t.quote));
          bq.appendChild(el('footer', null, t.author));
          tGrid.appendChild(bq);
        });
      }
    }

    /* ---- Pricing ---- */
    if (C.pricing) {
      setText('pricing-eyebrow', C.pricing.eyebrow);
      setText('pricing-title', C.pricing.title);
      setText('pricing-subtitle', C.pricing.subtitle);
      var pGrid = document.getElementById('pricing-grid');
      if (pGrid && C.pricing.plans) {
        C.pricing.plans.forEach(function (p) {
          var card = el('article', 'card price reveal' + (p.featured ? ' featured' : ''));
          if (p.badge) card.appendChild(el('span', 'badge', p.badge));
          card.appendChild(el('h3', null, p.name));
          var amount = el('div', 'amount');
          if (p.currency) amount.appendChild(el('span', null, p.currency));
          amount.appendChild(document.createTextNode(p.price));
          if (p.period) amount.appendChild(el('small', null, p.period));
          card.appendChild(amount);
          card.appendChild(el('p', 'price-note', p.note));
          var ul = el('ul');
          (p.features || []).forEach(function (f) { ul.appendChild(el('li', null, f)); });
          card.appendChild(ul);
          var a = el('a', 'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost'), p.button);
          a.href = '#contact';
          card.appendChild(a);
          pGrid.appendChild(card);
        });
      }
    }

    /* ---- Contact ---- */
    if (C.contact) {
      setText('contact-heading', C.contact.heading);
      setText('contact-text', C.contact.text);
      setText('label-name', C.contact.labelName);
      setText('label-email', C.contact.labelEmail);
      setText('label-message', C.contact.labelMessage);
      setText('contact-submit', C.contact.button);
    }

    /* ---- Footer ---- */
    if (C.footer) {
      setText('footer-tag', C.footer.tagline);
      setText('footer-subtitle', C.footer.subtitle);
      var fe = document.getElementById('footer-email');
      if (fe && C.footer.email) {
        fe.textContent = C.footer.email;
        fe.href = 'mailto:' + C.footer.email;
      }
    }
  }

  // Build the page from content BEFORE wiring up animations/observers
  renderContent();

  /* =====================================================================
     PART 2 — Interactivity
     ===================================================================== */

  /* ---------- Mobile navigation toggle ---------- */
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (elm) { io.observe(elm); });
  } else {
    revealEls.forEach(function (elm) { elm.classList.add('in'); });
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll('[data-count]');

  function animateCount(node) {
    var target = parseInt(node.getAttribute('data-count'), 10) || 0;
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      node.textContent = Math.round(eased * target).toString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (elm) { co.observe(elm); });
  }

  /* ---------- Contact form (client-side demo handling) ---------- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        status.textContent = 'Please add your name, a valid email, and a short note.';
        status.className = 'form-status err';
        return;
      }
      // No backend on a static host — show a friendly confirmation.
      // See README for how to connect a real endpoint (Formspree, Cloud Function, etc.)
      status.textContent = 'Thanks, ' + name + '! We\u2019ll be in touch within one business day.';
      status.className = 'form-status ok';
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
