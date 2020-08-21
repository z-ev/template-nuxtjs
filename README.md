# Template Nuxtjs (Frontend)
## Install
### Docker
```bash
echo -e "$(cat .env.docker)" >> .env \
&& docker-compose up --build
```
### Add string host's file
```bash
...
127.0.0.1 template.loc www.template.loc
```
## Use
### Docker commands start, stop, restart
```bash
docker-compose <command> && docker-compose logs -f
```
### Login
```bash
login: superadmin@gmail.com
pass: superadmin
```

### Build Setup
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

