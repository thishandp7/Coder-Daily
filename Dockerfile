FROM node

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim \
                                              graphviz imagemagick wget curl
RUN apt-get install telnet

RUN mkdir /app

COPY package.json /app
COPY package-lock.json /app
WORKDIR /app

RUN npm install

COPY . /app

RUN npm run build:dll

EXPOSE 3000

CMD ["npm", "run", "start:production"]
