// ==========================================
// Módulo de Armazenamento (storage.js)
// ==========================================

export const StorageService = {
  save(key, data) {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  },

  get(key) {
    try {
      const serializedData = localStorage.getItem(key);
      return serializedData ? JSON.parse(serializedData) : null;
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return null;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Erro ao remover do localStorage:", error);
    }
  }
};