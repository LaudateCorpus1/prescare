# Prescare

[![CircleCI](https://circleci.com/gh/aceleradora-TW/prescare.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/prescare)

Prescrição eletrônica para gerenciamento de medicamentos e cuidados feita para a casa Menino Jesus de Praga, com o objetivo de atender com excelência os acolhidos que lá residem. 

## Pré-requisitos mínimos para contribuir
- Ubuntu 12.04;
- Node.js 8;
- Docker CE;
- NPM

### Certifique-se de possuir o Git instalado no seu Ubuntu. Caso não possua, insira os comandos a seguir no terminal:
```
sudo apt-get update
sudo apt-get install git
```
## Instalando o Node.js:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs
```

## Instalando e iniciando Docker

Siga o passo-a-passo:

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce


## Clonando o repositório 
Abra o terminal e cole o seguinte comando para obter uma cópia do repositório:
```
git clone https://github.com/aceleradora-TW/prescare.git
```

## Instalando as dependências:
```
cd prescare/
npm install
npm run db:start
npm run db:create
npm start
```

## Populando o banco local
```
node seed.js
```
## Iniciando o servidor
Para iniciar o servidor, execute o seguinte comando, dentro do diretório /prescare:
```
npm start
```
## Acessando a página
### Acessar localmente o projeto:

http://localhost:3000

### Heroku Staging:

https://prescare-staging.herokuapp.com/
