
# Server Island Cook

by Ensaimada Studios Inc.

## Peticiones

- [GET](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [POST](https://github.com/matiassingers/awesome-readme)
- [DELETE](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [PUT](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all recipes

```http
  GET /api/recipe
```

#### Get recipe

```http
  GET /api/recipe/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `String` | **Required**. Id of recipe to fetch |

#### Add recipe

```http
  GET /api/recipe
```

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `String` | Name of the recipe |
| `ingredients`| `[name:String, amount: String]` | The ingredients of recipe |
| `steps`      | `[String]` | The steps of recipe |
| `picture_url`| `String` | The url of the image of the recipe|
| `difficulty`| `String` | Difficulty of the recipe :**easy**, **medium**, **hard** |
| `author`| `String` | The author of the recipe|
| `tags`| `[String]` | Tags about the recipe |



## Authors

- [@AracelyBerrocalHuerta](https://github.com/aracelyberrocalhuerta)
- [@XaviGT10](https://github.com/XaviGT10)
- [@MartaMAgui](https://github.com/martamagui)


![Logo](https://github.com/XaviGT10/server_IslandCook/blob/main/Resources/CompanyLogo.png?raw=true)



# 🐟Server_IslandCook🐟
<img src="https://cdn.dribbble.com/users/2417352/screenshots/16024017/media/7ed80e6fb9343313ba401e6188c22a01.jpg?compress=1&resize=1200x900&vertical=top" width=35% align="right">

### 💻Technologies:💻

- MongoDB
- NodeJS(ExpressJS, BodyParser, Nodemon)
