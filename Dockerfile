FROM node:8.5.0 as buildserver

ENV TINI_VERSION v0.16.1
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run-script build
EXPOSE 3000
CMD ["node", "./server.js"]

