
# Cinema

Este projeto utiliza as seguintes tecnologias e bibliotecas:

- **Vite**: Ferramenta de build rápida e moderna.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React**: Biblioteca para construção de interfaces de usuário.
- **SWR**: Biblioteca para gerenciamento de dados de forma eficiente.
- **Panda CSS**: Biblioteca de CSS para estilização.
- **Swiper**: Biblioteca para criação de sliders/carrosséis.

## Consumo da API do TMDB

Estamos consumindo a API do TMDB (The Movie Database) para obter informações sobre filmes. Para isso, utilizamos o `axios` para fazer as requisições HTTP.

## Configuração das Variáveis de Ambiente

Para configurar as variáveis de ambiente, siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do seu projeto.
2. Adicione as seguintes variáveis de ambiente ao arquivo `.env`:

3. No seu código, importe e utilize essas variáveis de ambiente. Por exemplo:

```typescript
// env.ts
export const env = {
  TMDB_BASE_URL: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  API_KEY: process.env.API_KEY
};

```


!["Panda Css"](/public/banner-panda-css.jpg)