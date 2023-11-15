# API_GPT_NODE
API do chat GPT utilizando nodeJS.

# ChatGPT OpenAI Integration

Este projeto demonstra a integração do modelo de linguagem GPT-3.5-turbo da OpenAI em um aplicativo Node.js para interações de conversação.

## Configuração

Antes de executar o projeto, certifique-se de configurar o arquivo `.env` com suas credenciais da API da OpenAI:

#Instale as dependências usando:
$ npm init -y

#Crie um arquivo chamado .env na raiz do seu projeto.

$ npm install dotenv

O comando npm install dotenv instala a biblioteca dotenv, que facilita a leitura de variáveis de ambiente de um arquivo .env no seu projeto Node.js.

#Insira em seu arquivo .env 
OPENAI_API_KEY=SuaChaveDeAPIAqui

#Executando o Script
 $ node index.js

# ERROR `fetch` !!!

Para resolver isso, você pode usar uma biblioteca como node-fetch que fornece uma implementação fetch para ambientes Node.js. Antes de usar o fetch, você precisa instalá-lo usando o npm (Node Package Manager). Você pode fazer isso com o seguinte comando:

$ npm install node-fetch
Depois de instalado, você pode ajustar o seu código da seguinte forma:

***import fetch from "node-fetch"; // Importe a biblioteca node-fetch***

Isso deve resolver o erro que você está enfrentando. Certifique-se de que a biblioteca node-fetch foi instalada antes de executar o código.





