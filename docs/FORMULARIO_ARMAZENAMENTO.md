# 📋 Documentação - Formulário de Cadastro

## 🔍 Onde os Dados são Armazenados?

### Situação Atual

**Os dados NÃO são armazenados em nenhum banco de dados ou servidor.**

Atualmente, o formulário funciona da seguinte forma:

1. ✅ **Validação**: Os campos obrigatórios são validados
2. ✅ **Formatação**: Os dados são formatados em uma mensagem estruturada
3. ✅ **Envio via WhatsApp**: A mensagem é aberta no WhatsApp Web/App com os dados pré-preenchidos
4. ❌ **Armazenamento**: Os dados NÃO são salvos automaticamente

### ⚠️ Limitações da Solução Atual

- Os dados só existem na mensagem do WhatsApp
- Não há histórico de cadastros no sistema
- Não é possível fazer análises ou relatórios
- Depende do usuário enviar a mensagem manualmente no WhatsApp

---

## 🚀 Opções de Melhoria

### Opção 1: Integração com API/Backend (Recomendado)

Para armazenar os dados em um banco de dados, você precisa:

1. **Criar uma API/Backend** que receba os dados
2. **Configurar um banco de dados** (PostgreSQL, MySQL, MongoDB, etc.)
3. **Descomentar o código** na função `handleSubmit` do arquivo `PostPurchaseForm.tsx`

#### Exemplo de Integração:

```typescript
// No arquivo PostPurchaseForm.tsx, descomente este bloco:
const API_URL = import.meta.env.VITE_API_URL || "https://sua-api.com/api/cadastro";

const response = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

#### Variáveis de Ambiente:

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://sua-api.com/api/cadastro
```

### Opção 2: Integração com Serviços de Formulários

Você pode usar serviços como:

- **Google Forms** (via API)
- **Formspree**
- **Typeform**
- **Zapier** (automação)
- **n8n** (automação - já mencionado no projeto)

### Opção 3: Webhook + Automação

Configure um webhook que:

1. Recebe os dados do formulário
2. Salva em banco de dados
3. Envia notificação para WhatsApp automaticamente
4. Envia email de confirmação

---

## 📝 Estrutura dos Dados Enviados

O formulário coleta os seguintes dados:

```typescript
{
  nomeCompleto: string;        // Obrigatório
  email: string;               // Obrigatório
  telefone: string;            // Obrigatório
  whatsapp: string;            // Obrigatório
  empresa: string;             // Obrigatório
  segmento: string;            // Obrigatório (med, beauty, auto)
  tipoNegocio: string;         // Opcional
  quantidadeFuncionarios: string; // Opcional
  sistemaAtual: string;        // Opcional
  mensagem: string;            // Opcional
}
```

---

## 🔧 Como Implementar Armazenamento

### Passo 1: Criar Backend/API

Exemplo usando Node.js + Express:

```javascript
// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/cadastro', async (req, res) => {
  const dados = req.body;
  
  // Salvar no banco de dados
  // await db.cadastros.create(dados);
  
  res.json({ success: true, message: 'Cadastro salvo com sucesso' });
});

app.listen(3000);
```

### Passo 2: Configurar CORS

Se sua API estiver em um domínio diferente, configure CORS:

```javascript
const cors = require('cors');
app.use(cors({
  origin: 'https://seu-dominio.com'
}));
```

### Passo 3: Atualizar Frontend

Descomente o código de integração com API no arquivo `PostPurchaseForm.tsx`.

---

## 📞 Número do WhatsApp Configurado

Atualmente configurado para: **+55 44 9725-1731**

Para alterar, edite a variável `whatsappNumber` na função `handleSubmit`.

---

## ✅ Checklist de Implementação

- [ ] Criar API/Backend
- [ ] Configurar banco de dados
- [ ] Configurar variável de ambiente `VITE_API_URL`
- [ ] Descomentar código de integração no frontend
- [ ] Testar envio de dados
- [ ] Configurar CORS se necessário
- [ ] Implementar tratamento de erros
- [ ] Adicionar validação no backend
- [ ] Configurar notificações automáticas

---

## 🐛 Solução de Problemas

### Erro: "CORS policy"
- Configure CORS no backend para permitir requisições do seu domínio

### Erro: "Network Error"
- Verifique se a URL da API está correta
- Verifique se o servidor está rodando
- Verifique variáveis de ambiente

### WhatsApp não abre
- Verifique se o número está no formato correto (sem espaços ou caracteres especiais)
- Teste em diferentes navegadores

---

## 📚 Recursos Adicionais

- [Documentação do Wouter](https://github.com/molefrog/wouter)
- [Documentação do Sonner (Toast)](https://sonner.emilkowal.ski/)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)

