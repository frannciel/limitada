# Govnex Soluções Digitais — site institucional

Site estático responsivo feito com HTML, CSS e JavaScript, preparado para publicação na Vercel.

## Estrutura

```text
govnex-site/
├── index.html
├── styles.css
├── script.js
├── vercel.json
└── assets/
    ├── favicon.svg
    └── govnex-mark.svg
```

## Executar localmente

Abra `index.html` no navegador. Para uma experiência local mais próxima de hospedagem, use a extensão Live Server no VS Code ou execute um servidor HTTP local.

## Antes de publicar

1. **Substitua todos os dados fictícios no rodapé**: CNPJ, endereço e telefone. O número do botão WhatsApp também é fictício; atualize o link `wa.me` em `index.html`.
2. Em `script.js`, substitua `FORM_ENDPOINT` pelo endpoint real de um serviço de formulário que aceite anexos. O exemplo está preparado para um endpoint FormSubmit, mas permanece desativado enquanto estiver como `SEU_EMAIL_REAL`.
3. Faça um teste real de recebimento de mensagem e anexo antes de divulgar o site. O formulário não envia nem armazena dados enquanto o endpoint não estiver configurado.
4. O campo de anexo aparece quando o visitante escolhe **Pedido de cotação de preços — contratação pública/dispensa de licitação**. O limite validado no navegador é 10 MB; confirme também o limite do serviço escolhido.
5. Confirme se as categorias de serviços listadas refletem aquilo que a empresa realmente pretende ofertar e publique as políticas de privacidade/uso de dados adequadas.
6. A imagem de fundo e a fonte usam recursos externos; para máxima autonomia, baixe os arquivos e hospede-os localmente.

## Publicar na Vercel

1. Extraia o ZIP.
2. Envie a pasta para um repositório GitHub.
3. Entre em https://vercel.com e selecione **Add New → Project**.
4. Importe o repositório.
5. Como é um site estático, não precisa de comando de build nem de instalação; mantenha a raiz do projeto como diretório raiz.
6. Clique em **Deploy**.
7. Depois, configure seu domínio próprio nas configurações do projeto, se já tiver um.

## Observações

- O conteúdo não afirma que a Govnex já possui fabricantes representados, certificações ou contratos.
- O CNPJ, endereço e telefone mostrados são **fictícios e apenas demonstrativos**. Não publique o site comercialmente com esses dados.
- O botão de WhatsApp usa um número fictício. Substitua-o pelo número empresarial antes de publicar.
- O formulário inclui um campo de anexo específico para pedidos de cotação de preços, mas o envio só funcionará depois da configuração de um serviço compatível. Para pedidos ligados a contratações públicas, revise os documentos recebidos e trate-os com confidencialidade.
