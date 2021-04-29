## Datatypes

> https://sequelize.org/v5/manual/data-types.html

## Mirgations

```
npx sequelize-cli model:generate --name users --attributes firstname:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

```
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed --seed 20200602234904-demo-user
npx sequelize-cli db:seed:undo --seed 20200602234904-demo-user
```
