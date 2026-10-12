// ==========================================
// Módulo de Roteamento SPA e Templates (router.js)
// ==========================================
import { StorageService } from './storage.js';

const routes = {
  '#inicio': `
    <div class="view-content">
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao sistema SPA desenvolvido com JavaScript moderno e manipulação da DOM.</p>
    </div>
  `,
  '#cadastro': `
    <div class="view-content">
      <h1>Registo de Utilizador</h1>
      <form id="form-cadastro">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" required placeholder="Digite o seu nome">
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" required placeholder="Digite o seu e-mail">
        
        <button type="submit">Guardar Dados</button>
      </form>
    </div>
  `,
  '#projetos': `
    <div class="view-content">
      <h1>Meus Projetos e Registos</h1>
      <p>Componentes gerados dinamicamente via sistema de templates:</p>
      <div id="lista-dados-salvos"></div>
    </div>
  `
};

export function initRouter() {
  const mainContainer = document.getElementById('app');

  function navigate() {
    if (!mainContainer) return;

    const currentHash = window.location.hash || '#inicio';
    const content = routes[currentHash] || `<h1>404</h1><p>Página não encontrada.</p>`;

    mainContainer.innerHTML = content;

    if (currentHash === '#cadastro') {
      setupCadastroForm();
    } else if (currentHash === '#projetos') {
      renderDynamicTemplates();
    }
  }

  window.addEventListener('hashchange', navigate);
  window.addEventListener('DOMContentLoaded', navigate);
}

function setupCadastroForm() {
  const form = document.getElementById('form-cadastro');
  const inputNome = document.getElementById('nome');
  const inputEmail = document.getElementById('email');

  if (!form) return;

  // RECUPERAR (GET / JSON.parse): Restaura os dados salvos anteriormente ao abrir o navegador
  const dadosSalvos = StorageService.get('utilizador_cadastrado');
  if (dadosSalvos) {
    if (inputNome) inputNome.value = dadosSalvos.nome || '';
    if (inputEmail) inputEmail.value = dadosSalvos.email || '';
  }

  // GRAVAR (SET / JSON.stringify): Salva os dados ao submeter o formulário de forma duradoura
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = inputNome.value;
    const email = inputEmail.value;

    const userData = { nome, email, dataRegistro: new Date().toLocaleDateString() };
    
    StorageService.save('utilizador_cadastrado', userData);
    
    alert('Dados guardados com sucesso e retidos no localStorage!');
    window.location.hash = '#projetos';
  });
}

function renderDynamicTemplates() {
  const container = document.getElementById('lista-dados-salvos');
  if (!container) return;

  const dados = StorageService.get('utilizador_cadastrado');

  if (!dados) {
    container.innerHTML = `<p>Nenhum registo encontrado no armazenamento local.</p>`;
    return;
  }

  // Sistema de Templates com Template Literals
  container.innerHTML = `
    <div class="card-projeto" style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem; border-radius: 4px; background: #fafafa;">
      <h3>Utilizador: ${dados.nome}</h3>
      <p><strong>E-mail:</strong> ${dados.email}</p>
      <p><small>Data do registo: ${dados.dataRegistro}</small></p>
    </div>
  `;
}