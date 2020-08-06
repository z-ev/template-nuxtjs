# template-nuxtjs

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Docker
### Conig
```bash
echo -e "\n$(cat .env.docker)" >> .env
```

### build
```bash
docker-compose up --build
```

### Commands start, stop, restart
```bash
docker-compose <command> && docker-compose logs -f


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
