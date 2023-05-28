# Usa a imagem "node" como base
FROM node

# Define o diretório de trabalho como "/app"
WORKDIR /app

# Copia o arquivo "package.json" para o diretório de trabalho
COPY package.json .

# Instala as dependências do projeto
RUN npm install

# Copia o resto do projeto para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Inicia a aplicação React 
CMD ["npm", "start"]
