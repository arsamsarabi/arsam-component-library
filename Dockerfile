FROM node:14.1-alpine AS builder

WORKDIR /opt/web
COPY package.json yarn.lock ./
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN yarn build

ADD ./github/actions/deployerdeployer.sh /deployer.sh
RUN chmod +x /deployer.sh
ENTRYPOINT ["/deployer.sh"]
