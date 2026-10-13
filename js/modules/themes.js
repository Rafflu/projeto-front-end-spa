export function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  
  // Verifica a preferência salva anteriormente no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', 'true');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleBtn.setAttribute('aria-pressed', 'false');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.setAttribute('aria-pressed', 'true');
      }
    });
  }
}