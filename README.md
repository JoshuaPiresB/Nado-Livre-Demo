# Nado Livre — Escola Aquática

Website institucional demonstrativo para uma escola de natação fictícia. O projeto apresenta modalidades, equipe, horários e caminhos de contato preservando o funcionamento de mapa, telefone e WhatsApp sem usar dados de uma empresa real.

## Tecnologias

- Next.js 16 com App Router e TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React
- Next/Image e Next/Font

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run lint
npm run build
```

## Conteúdo e manutenção

- Dados institucionais, navegação, modalidades, horários e associação das fotos da equipe: `data/school.ts`.
- Número e mensagens do WhatsApp: `lib/whatsapp.ts`.
- Estilos e comportamento responsivo: `app/globals.css`.
- Imagens otimizadas: `public/images`.

## Conteúdo demonstrativo

Os nomes da escola, dos profissionais, o endereço, os telefones e o e-mail são fictícios. Os números usam sequências inválidas para evitar contato acidental com terceiros.

As imagens da equipe foram criadas por inteligência artificial exclusivamente para esta demonstração. Elas não representam pessoas reais. A imagem da aula infantil e os depoimentos também são conteúdos ilustrativos.

Antes de usar este projeto para uma escola real, substitua os dados em `data/school.ts`, o número em `lib/whatsapp.ts` e a URL pública nos arquivos de metadata.

## Publicação na Vercel

O projeto usa o pipeline nativo do Next.js na Vercel. Configure o projeto com:

- Framework Preset: `Next.js`
- Root Directory: `.`
- Install Command: `npm ci` (ou deixe o padrão automático)
- Build Command: `npm run build` (ou deixe o padrão automático)
- Output Directory: deixe em branco
- Node.js: `22.x`
- Production Branch: `main`

Não há variáveis de ambiente obrigatórias, backend ou banco de dados. Os scripts `build:sites`, `start:sites` e `install:ci` preservam a compatibilidade com a publicação existente baseada em Vinext/Cloudflare e não devem ser usados no projeto da Vercel.
