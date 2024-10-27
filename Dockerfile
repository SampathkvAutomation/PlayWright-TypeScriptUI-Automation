FROM mcr.microsoft.com/playwright:v1.37.0-focal

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g npm@latest
RUN npm install
RUN npx playwright install

COPY . .

#Adding a non root User named "turing"
RUN useradd -m node

#Giving Read/Write Access to non-root user to main project folder  "/app"
RUN chown -R node /app

#Switching from root user to non-root user(turing)
USER node

CMD ["npx","cross-env","ENV=qa","npm","run","test:serial"]