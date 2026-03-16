    // Generate particles
    (function () {
      const container = document.getElementById('particles');
      for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
        p.style.animationDuration = (8 + Math.random() * 15) + 's';
        p.style.animationDelay = (Math.random() * 15) + 's';
        p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
        container.appendChild(p);
      }
    })();

    // Clock
    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('clock').textContent = h + ':' + m + ':' + s;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Enter key support
    document.getElementById('teamInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleSubmit();
    });

    // Submit handler
    function handleSubmit() {
      const val = document.getElementById('teamInput').value.trim();
      const err = document.getElementById('errorMsg');

      if (!val) {
        err.classList.add('show');
        document.getElementById('teamInput').focus();
        setTimeout(() => err.classList.remove('show'), 3000);
        return;
      }

      // Transition
      const overlay = document.getElementById('transOverlay');
      const bar = document.getElementById('loadBar');
      overlay.classList.add('active');

      setTimeout(() => bar.style.width = '100%', 50);

      setTimeout(() => {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('teamDisplay').textContent = val.toUpperCase();
        const cluePage = document.getElementById('clue-page');
        cluePage.classList.add('active');
        overlay.classList.remove('active');
        bar.style.width = '0';
        bar.style.transition = 'none';
        setTimeout(() => bar.style.transition = 'width 0.6s ease', 100);
      }, 800);
    }
