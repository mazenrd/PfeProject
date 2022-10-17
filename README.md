# Souldan Portal

## Minimum requis

- Node.js 14.0.0
- Npm 6.14.4

## Demarer l'application

avec yarn

```sh
yarn install
yarn build
yarn global add serve
serve -s build
```

avec npm

```sh
npm install
npm run  build
npm install -g  serve
serve -s build
```

Si on veux specifier le port on peut modifier la dernière commande par

```sh
serve -l PORT -s build
```
