# Adriano Noronha — Passeios em Fernando de Noronha

Landing page para um guia turístico credenciado em Fernando de Noronha, apresentando passeios, praias, roteiros e canais de contato.

## Demo

Acesse a versão publicada em [camilagermanoo.github.io/adrianoNoronha](https://camilagermanoo.github.io/adrianoNoronha/).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules com design tokens
- [Oxlint](https://oxc.rs/) e [Prettier](https://prettier.io/)

## Como rodar

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## Scripts

| Comando                | Descrição                              |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento   |
| `npm run build`        | Gera o build de produção em `dist/`    |
| `npm run preview`      | Serve o build de produção localmente   |
| `npm run lint`         | Executa a análise estática do código   |
| `npm run format`       | Formata o código com Prettier          |
| `npm run format:check` | Verifica a formatação sem alterar nada |

## Deploy

O deploy é feito automaticamente no GitHub Pages a cada push na branch `main`, por meio do workflow em `.github/workflows/deploy.yml`.
