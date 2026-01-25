# Instruções de Configuração - BS Odonto

## ✅ Configurações Iniciais Completas

O projeto está pronto para uso! Siga os passos abaixo:

## 🚀 Como Executar

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:3000
```

## 📝 Personalizações Necessárias

### 1. Números de CRO
Edite `components/About.tsx` e adicione os números de CRO das doutoras:
- Linha ~25: CRO da Dra. Beatriz Alvarenga
- Linha ~38: CRO da Dra. Sílvia Santos

### 2. Google Maps Embed
Para adicionar o mapa embutido:

1. Acesse [Google Maps](https://www.google.com/maps)
2. Pesquise: "Rua Pedra Preciosa 55A, Belo Horizonte"
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código iframe
5. Substitua o conteúdo do placeholder em `components/Location.tsx` (linhas 83-95)

### 3. Instagram
Edite `components/Footer.tsx` (linha ~58) com o link correto do Instagram:
```tsx
href="https://www.instagram.com/[seu-usuario]"
```

### 4. Depoimentos Reais
Substitua os depoimentos placeholder em `components/Testimonials.tsx` por depoimentos reais do Google Reviews.

### 5. Galeria Antes/Depois
Adicione as imagens reais em `components/Results.tsx`:
1. Coloque as imagens em `public/images/results/`
2. Use `next/image` para otimização
3. Remova os placeholders

## 🎨 Cores Personalizadas

As cores já estão configuradas no `tailwind.config.js`:
- **Primary (Verde)**: `#4A726A`
- **Secondary (Marrom)**: `#D4C4B0`
- **Off-white**: `#FAF9F7`
- **Gray**: `#6B7280`

## 📱 WhatsApp

O link do WhatsApp já está configurado em todos os componentes:
- Número: (31) 98528-0016
- Mensagem pré-formatada: "Olá, gostaria de agendar uma avaliação."

## 🔍 SEO

Metadata básica já configurada em `app/layout.tsx`. Para melhorar:
- Adicione Google Analytics
- Configure Google Search Console
- Adicione schema.org markup (LocalBusiness)

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Outras plataformas
```bash
npm run build
# Siga as instruções da sua plataforma de hospedagem
```

## 📞 Suporte

Em caso de dúvidas sobre o código, consulte a documentação do Next.js: https://nextjs.org/docs
