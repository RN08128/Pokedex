# 🔴 PokéDex Web App

Uma aplicação web simples e responsiva de Pokédex que consome a [PokéAPI](https://pokeapi.co/) para buscar e exibir informações detalhadas de Pokémon em tempo real.

---

## 🚀 Funcionalidades

- **Busca por Nome:** Permite pesquisar qualquer Pokémon digitando seu nome.
- **Informações Básicas:** Exibe ID, altura, peso, tipos e as sprites (frente e costas) da forma padrão.
- **Detalhamento de Habilidades:** Faz requisições secundárias à API para buscar e exibir o nome e a descrição detalhada de cada habilidade em inglês dentro de cards estilizados.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização personalizada em Dark Mode com CSS Flexbox.
- **JavaScript (ES6+):** Manipulação do DOM, funções assíncronas (`async/await`) e consumo da API de forma dinâmica via `fetch`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html   # Estrutura principal da interface
├── index.css    # Estilização visual da Pokédex
└── index.js     # Lógica de integração com a PokéAPI e manipulação do DOM