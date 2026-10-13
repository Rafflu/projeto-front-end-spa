// ==========================================
// Script Principal (main.js)
// ==========================================
import { initRouter } from './modules/router.js';
import { initThemeToggle } from './modules/themes.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Aplicação Front-End iniciada com sucesso.");
  
  // Inicializa o sistema de rotas SPA
  initRouter();

  // Inicializa o botão de alternância de tema e localStorage
  initThemeToggle();
});