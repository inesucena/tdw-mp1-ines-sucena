module.exports = {
    // Procura arquivos de teste
    testMatch: ["**/__tests__/**/*.test.js"],
  
    // Direciona para onde o Jest deve procurar por arquivos
    roots: ["<rootDir>"],
  
    // Indica qual é o ambiente (Javascript)
    testEnvironment: "jsdom",
  
    // Transformar os arquivos utilizando Babel, se necessário
    transform: {
      "^.+\\.js$": "babel-jest",
    },
  };
  
  
  
  
  