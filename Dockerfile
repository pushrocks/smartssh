FROM hosttoday/ht-docker-node:npmts
COPY ./ /node-app
WORKDIR /node-app
RUN npm install
RUN npmts