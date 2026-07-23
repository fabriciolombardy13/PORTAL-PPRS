# Portal PPRS

Primeira versão funcional do portal de questões da Polícia Penal do RS.

## O que já funciona

- Página inicial responsiva
- Banco de questões
- Filtro por matéria
- Geração de simulado por matéria e quantidade
- Modo estudo e modo prova
- Tesoura para eliminar/restaurar alternativas
- Correção e justificativas
- Resultado final, percentual e nota
- Formulário para gerar pedido de novo simulado
- Estrutura inicial do Supabase

## Rodar no computador

1. Instale Node.js 20.9 ou superior.
2. Abra esta pasta no terminal.
3. Execute:

```bash
npm install
npm run dev
```

4. Abra `http://localhost:3000`.

## Conectar ao Supabase

1. No Supabase, abra **SQL Editor**.
2. Cole e execute `supabase/schema.sql`.
3. No painel do projeto, abra **Connect** e copie:
   - Project URL
   - Publishable key
4. Copie `.env.example` para `.env.local`.
5. Preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

## Publicar na Vercel

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta.
3. Na Vercel, clique em **Add New > Project**.
4. Importe o repositório.
5. Em **Environment Variables**, adicione as duas variáveis do Supabase.
6. Clique em **Deploy**.

## Próximas etapas previstas

- Login e cadastro
- Salvamento de tentativas
- Estatísticas por usuário
- Favoritas e erradas
- Painel administrativo
- Importação de bancos de questões em JSON
- PDF automático
