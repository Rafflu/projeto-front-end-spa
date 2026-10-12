// ==========================================
// Script Principal (main.js)
// ==========================================
import { initRouter } from './modules/router.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Aplicação Front-End iniciada com sucesso.");
  
  // Inicializa o sistema de rotas SPA
  initRouter();
});