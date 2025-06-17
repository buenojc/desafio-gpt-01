# 🏆 Desafio Semanal #1 — JS Avançado + Lógica + API Simples

## 🎯 Propósito do Projeto

Este repositório faz parte de um experimento pessoal para entender como a Inteligência Artificial pode contribuir no processo de aprendizado e desenvolvimento de programadores.

A ideia central é utilizar a IA como uma mentora de estudo, capaz de:

- 📌 Propor desafios práticos e progressivos.
- 💡 Explicar conceitos de forma clara e personalizada.
- 🔍 Ajudar na análise e melhoria do código.
- 🚀 Estimular a autonomia no aprendizado.

Além de servir como trilha de estudos, este projeto busca avaliar na prática o quanto a IA pode apoiar quem deseja evoluir de forma contínua e estruturada na programação.

---

> Um experimento sobre como aprender com a ajuda da inteligência artificial.

## 🔹 Parte 1 — Função Avançada: `groupBy`

### 🎯 Objetivo

Crie uma função chamada `groupBy(array, callback)` que agrupe os itens do array baseado no retorno da função callback.

Essa função é comum em bibliotecas como Lodash e é muito útil para manipulação de dados.

---

### 📜 Regras

- A função deve receber dois parâmetros:
    - Um `array` com elementos genéricos.
    - Uma função `callback` que define a chave de agrupamento.

- Retorne um objeto onde as chaves são os valores retornados pela `callback` e os valores são arrays contendo os itens correspondentes.

---

### 🧠 Exemplo

```javascript
const data = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
];

const grouped = groupBy(data, item => item.age);

console.log(grouped);
```

## 🔹 Parte 2 — Algoritmo de Lógica: `singleNumber`

### 🎯 Objetivo

Dado um array de inteiros onde todos os elementos aparecem **exatamente duas vezes**, **exceto um elemento que aparece apenas uma vez**, encontre e retorne este elemento.

Esse é um problema clássico em entrevistas técnicas e serve para treinar lógica, raciocínio e eficiência de código.

----------

### 📜 Regras

-   Deve receber um array de números.

-   Todos os números aparecem duas vezes, exceto um único número.

-   Retorne o número que não se repete.


----------

### 🧠 Exemplo
``` javascript

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums)); // Deve retornar 4

```
### 🚀 Desafio Bônus (Opcional)

Tente resolver o desafio **sem usar estruturas auxiliares** como objetos, Maps ou Sets.

👉 Dica: Utilize operações bitwise, especialmente o operador XOR (`^`).

### 💡 Por quê?

-   `n ^ n = 0` (um número XOR com ele mesmo resulta em zero)

-   `n ^ 0 = n` (um número XOR com zero continua ele mesmo)


Portanto, se você fizer XOR de todos os elementos do array, os pares se anulam e sobra justamente o número que aparece uma vez.

## 🔹 Parte 3 — Desenvolvimento de API: Gerenciador de Tarefas (To-Do API)

### 🎯 Objetivo

Criar uma API REST utilizando **Node.js + Express**, capaz de realizar operações CRUD (Create, Read, Update, Delete) para gerenciar uma lista de tarefas.

----------

### 📜 Regras e Requisitos

-   A API deve conter os seguintes endpoints:

| Método | Rota         | Descrição                             |
|--------|--------------|---------------------------------------|
| GET    | `/tasks`     | Lista todas as tarefas                |
| POST   | `/tasks`     | Cria uma nova tarefa                  |
| PUT    | `/tasks/:id` | Atualiza uma tarefa (nome ou status)  |
| DELETE | `/tasks/:id` | Remove uma tarefa                     |

### 🗂️ Estrutura dos Dados

Cada tarefa deve conter:

-   `id`: string ou número (UUID ou incremental).

-   `title`: string (descrição ou nome da tarefa).

-   `completed`: boolean (define se a tarefa está concluída ou não).


----------

### 🛠️ Tecnologias Sugeridas

-   Node.js

-   Express

-   Nodemon (para auto-reload no desenvolvimento)

-   UUID (opcional, para gerar IDs únicos)

-   TypeScript (opcional, se quiser avançar mais)


----------

### 🏗️ Funcionamento Esperado

-   O backend mantém os dados **em memória** (um array de objetos).

-   A API deve permitir:

    -   Criar uma nova tarefa (`POST /tasks`)

    -   Listar todas as tarefas (`GET /tasks`)

    -   Atualizar uma tarefa por ID (`PUT /tasks/:id`)

    -   Deletar uma tarefa por ID (`DELETE /tasks/:id`)


----------

### 💡 Extras (Opcional)

-   Implementar filtros, como:

    -   `/tasks?completed=true` → Listar apenas as concluídas.

-   Adicionar ordenações.

-   Validar entrada de dados (ex.: título não pode ser vazio).

-   Implementar versionamento na API (`/api/v1/tasks`).

--- 
## 🔍 Critérios de Avaliação

-   ✅ Organização do código.

-   ✅ Clareza, legibilidade e uso de boas práticas.

-   ✅ Correção e funcionamento das funções e da API.

-   ✅ Uso adequado das ferramentas propostas.

-   ✅ Estrutura dos commits (opcional, mas recomendado).
