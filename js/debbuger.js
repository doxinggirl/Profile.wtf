 (function() {
    const threshold = 160;
    let lastWidth = window.outerWidth;
    let lastHeight = window.outerHeight;

    function detectDevTools() {
      const widthDiff = lastWidth - window.outerWidth;
      const heightDiff = lastHeight - window.outerHeight;
      if (widthDiff > threshold || heightDiff > threshold) {
        alert("縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆");
      }
      lastWidth = window.outerWidth;
      lastHeight = window.outerHeight;
    }

    window.addEventListener('resize', detectDevTools);
  })();

  (function detectDebugger() {
  const start = Date.now();
  debugger;
  const end = Date.now();

  if (end - start > 100) {
    fetch("https://ipinfo.io/json") 
      .then(res => res.json())
      .then(data => {
        alert(`Your IP: ${data.ip}`);
      })
      .catch(() => {
        alert("縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆縺雁燕縺ｯ鄂ｪ繧堤官縺励◆");
      });
  }
  setTimeout(detectDebugger, 1000);
})();
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
      e.preventDefault();
    }
  });
