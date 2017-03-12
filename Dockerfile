FROM node

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm

ENV HOME=/home/app

COPY package.json $HOME/muhcore/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/muhcore
RUN npm install

USER root
COPY . $HOME/muhcore
RUN chown -R app:app $HOME/*
USER app

RUN pwd
RUN ls -lh

CMD ["node", "server.js"]