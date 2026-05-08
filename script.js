(function () {
  'use strict';

  /* ─── Scroll-to-top button ─── */
  var scrollTopBtn = document.getElementById('scrollTop');

  function toggleScrollTop() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', toggleScrollTop, { passive: true });
  toggleScrollTop();

  /* ─── Active nav link on scroll ─── */
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = [];

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var section = document.getElementById(href.slice(1));
      if (section) {
        sections.push({ link: link, section: section });
      }
    }
  });

  function updateActiveNav() {
    var scrollPos = window.scrollY + 120;
    var active = null;

    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].section.offsetTop <= scrollPos) {
        active = sections[i].link;
        break;
      }
    }

    navLinks.forEach(function (link) {
      link.style.color = '';
      link.style.fontWeight = '';
    });

    if (active) {
      active.style.color = 'var(--accent)';
      active.style.fontWeight = '600';
    }
  }

  if (sections.length > 0) {
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }
})();
