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

#### Get recipe by Id

```http
  GET /api/recipe/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `String` | **Required**. Id of recipe to fetch |

#### Get recipe by tag

```http
  GET /api/recipe/tag/${tags}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag`      | `String` |  |

#### Add recipe

```http
  POST /api/recipe
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


![Logo](https://github.com/XaviGT10/server_IslandCook/blob/main/Resources/logoApp.png?raw=true)


## Used By

This project is used by the following companies:

- Ensaimada Studio Inc

![Logo](https://github.com/XaviGT10/server_IslandCook/blob/main/Resources/CompanyLogo.png?raw=true)



## Tech Stack


**Server:** Node, Express, MongoDB, BodyParser, Nodemon


## Run Locally

Clone the project

```bash
  git clone https://github.com/XaviGT10/server_IslandCook.git
```

Go to the project directory

```bash
  cd server_IslandCook
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

