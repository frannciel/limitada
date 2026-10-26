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

1. Em `script.js`, troque `contato@seudominio.com.br` pelo e-mail institucional real.
2. Confirme se as categorias de serviços listadas refletem aquilo que a empresa realmente pretende ofertar.
3. Adicione os dados empresariais e políticas legais quando estiverem definidos.
4. A imagem de fundo e a fonte usam recursos externos; para máxima autonomia, baixe os arquivos e hospede-os localmente.
5. Teste o formulário em um computador com aplicativo de e-mail configurado. Ele usa `mailto:` e não armazena nem envia dados a um backend.

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
- O formulário é apenas um atalho para abrir o aplicativo de e-mail. Para receber mensagens diretamente no site, será necessário integrar um serviço de formulário ou uma função backend.
