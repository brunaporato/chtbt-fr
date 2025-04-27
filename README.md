# 🐆 FURIA <> brunaporato
## Chatbot

Este projeto foi desenvolvido com o objetivo de criar uma interface conversacional para fãs do time de CS:GO da **FURIA**.

---

## ✅ O que foi desenvolvido

- **Landing Page interativa** com identidade visual inspirada na FURIA.
- **Seção com cards** destacando as próximas partidas do time (funcionalidade EXTRA).
- **Chatbot temático**, com respostas para perguntas comuns dos fãs.
- **Mock de dados com intents**, organizando perguntas por temas e respostas personalizadas.
- Exemplo comentado no código de como seria feita a integração com a **API da OpenAI**, incluindo créditos.

---

## 💬 Funcionalidades do Chatbot

O chatbot responde a perguntas como:
- Próximo jogo
- Capitão da equipe
- Destaques do jogador KSCERATO
- Melhor mapa da FURIA
- Resultados de campeonatos

As perguntas são interpretadas por palavras-chave (intents), com respostas simuladas para demonstrar a lógica da conversa.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **ESLint**
- **Phosphor Icons**

---

## 🧠 Estrutura das Intents

As intents são organizadas em um mock de dados como este:

```ts
  {
    keywords: ['melhor mapa', 'mapa favorito', 'mapa forte'],
    response: 'Historicamente, o Vertigo é o mapa mais forte da FURIA, com mais de 70% de aproveitamento. Nuke e Inferno também são pontos fortes.',
  }
```

## 🔌 Exemplo de Integração com OpenAI
O código contém uma sugestão de como a lógica do chatbot poderia ser expandida com a API da OpenAI dentro do arquivo `./src/components/Chatbot.tsx`.
Essa parte está comentada para fins de demonstração, e os créditos da API são respeitados no código.

## 📂 Como rodar o projeto localmente
Bast clonar o repo
```bash
  git clone https://github.com/brunaporato/chtbt-fr.git
```
Entrar na pasta do projeto
```bash
  cd chtbt-fr
```
Instalar as dependências e rodar o projeto
```bash
  npm install
  npm run dev
```

## ✨ Melhorias futuras
- Integração real com OpenAI ou algum outro provedor de AI
- Banco de dados com partidas em tempo real
- Histórico de mensagens no chat

### Feito com 🖤
[brunaporato](https://linkedin.com/in/brunaporato)