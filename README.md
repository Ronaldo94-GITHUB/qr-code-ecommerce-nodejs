# Gerador de QR Code para E-commerce com Node.js

Projeto desenvolvido em **Node.js** para gerar QR Codes personalizados de links de produtos de e-commerces diretamente pelo terminal.

A aplicação foi criada com foco em simplicidade, praticidade e organização, permitindo transformar rapidamente links de produtos em QR Codes sem a necessidade de uma interface gráfica.

---

## Objetivo

O objetivo deste projeto é facilitar a criação de QR Codes para e-commerces.

O usuário informa o endereço de uma página de produto e o sistema:

1. recebe o link pelo terminal;
2. valida a URL informada;
3. gera o QR Code;
4. exibe o QR Code diretamente no terminal;
5. permite que o código seja escaneado para acessar a página do produto.

---

## Tecnologias utilizadas

* Node.js
* JavaScript
* NPM
* prompt
* qrcode-terminal
* Git
* GitHub

---

## Estrutura do projeto

```text
qr-code-ecommerce-nodejs/
│
├── src/
│   ├── index.js
│   │
│   ├── prompts/
│   │   └── prompt-main.js
│   │
│   └── services/
│       └── qr-code/
│           ├── create.js
│           └── handle.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Funcionamento

O fluxo principal da aplicação é:

```text
Usuário
   │
   ▼
Terminal
   │
   ▼
Entrada do link do produto
   │
   ▼
Validação da URL
   │
   ▼
Geração do QR Code
   │
   ▼
QR Code exibido no terminal
   │
   ▼
Acesso à página do produto
```

---

## Como instalar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd qr-code-ecommerce-nodejs
```

Instale as dependências:

```bash
npm install
```

---

## Como executar

Execute:

```bash
npm start
```

O terminal solicitará:

```text
Digite o link do produto:
```

Exemplo:

```text
https://www.exemplo.com/produto
```

Depois disso, o QR Code será exibido diretamente no terminal.

---

## Exemplo de execução

```text
==========================================
     GERADOR DE QR CODE E-COMMERCE
==========================================

Gere QR Codes de links de produtos
diretamente pelo terminal.

Digite o link do produto:
https://www.exemplo.com/produto

Gerando QR Code...

[QR CODE]

QR Code criado com sucesso!

Destino:
https://www.exemplo.com/produto

==========================================
PROCESSO FINALIZADO
==========================================
```

---

## Validação de URL

A aplicação aceita URLs que utilizem os protocolos:

```text
http://
https://
```

Caso o usuário informe um endereço inválido, a aplicação exibirá uma mensagem de erro e não criará o QR Code.

Exemplo:

```text
Erro: Link inválido. Utilize uma URL iniciando com http:// ou https://.
```

---

## Principais funcionalidades

* geração de QR Codes pelo terminal;
* entrada interativa de dados;
* validação de URLs;
* tratamento de erros;
* organização modular do código;
* execução simples com NPM;
* compatibilidade com páginas de produtos de e-commerce.

---

## Arquivos principais

### `src/index.js`

É o ponto de entrada da aplicação.

Responsável por:

* iniciar o programa;
* exibir as mensagens no terminal;
* solicitar o link ao usuário;
* chamar a validação;
* chamar o gerador de QR Code.

### `src/prompts/prompt-main.js`

Define o campo que será solicitado ao usuário no terminal.

Exemplo:

```text
Digite o link do produto:
```

### `src/services/qr-code/handle.js`

Responsável por validar o link informado.

Verifica se:

* o campo está preenchido;
* a URL é válida;
* o endereço utiliza `http://` ou `https://`.

### `src/services/qr-code/create.js`

Responsável pela geração do QR Code utilizando a biblioteca `qrcode-terminal`.

---

## Dependências

### prompt

Biblioteca utilizada para receber dados informados pelo usuário diretamente no terminal.

### qrcode-terminal

Biblioteca responsável por gerar e exibir QR Codes diretamente no console.

---

## Scripts

O projeto possui o seguinte script no `package.json`:

```json
"scripts": {
  "start": "node src/index.js"
}
```

Para executar:

```bash
npm start
```

---

## Aplicações práticas

O projeto pode ser utilizado para criar QR Codes de:

* páginas de produtos;
* lojas virtuais;
* catálogos digitais;
* promoções;
* cupons;
* páginas de checkout;
* campanhas de marketing;
* vitrines;
* cartões;
* embalagens;
* materiais impressos.

---

## Possíveis melhorias futuras

Este projeto pode evoluir com funcionalidades como:

* geração do QR Code em PNG;
* geração em SVG;
* escolha de tamanho;
* personalização de cores;
* geração de múltiplos QR Codes;
* histórico de links;
* exportação de QR Codes;
* integração com banco de dados;
* cadastro de produtos;
* integração com APIs de e-commerce;
* interface web;
* API REST;
* painel administrativo;
* QR Codes para cupons;
* QR Codes para checkout;
* QR Codes personalizados por produto.

---

## Conceitos praticados

Este projeto permite praticar:

* Node.js;
* JavaScript;
* módulos ES;
* NPM;
* organização de projetos;
* entrada de dados pelo terminal;
* validação de dados;
* tratamento de erros;
* separação de responsabilidades;
* Git;
* GitHub.

---

## Status do projeto

Projeto funcional e pronto para uso educacional e de portfólio.

```text
PROJECT_STATUS=COMPLETE
QR_CODE_GENERATOR=READY
URL_VALIDATION=READY
TERMINAL_INTERFACE=READY
```

---

## Autores

Desenvolvido por:

**Ronaldo Augusto Sabino**
**Rogério Augusto Sabino**

---

## Licença

Projeto desenvolvido para fins educacionais, acadêmicos e de portfólio.
