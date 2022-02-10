const express = require("express");
const app = express();

const recipeRoute = express.Router();
let Recipe = require("../model/RecipeModel");

// Add Recipe
recipeRoute.route("/recipe").post((req, res, next) => {
    Recipe.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get Recipe
recipeRoute.route("/recipe").get((req, res, next) => {
    Recipe.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get RecipesByTag
recipeRoute.route("/recipe/tag/:tags").get((req, res, next) => {
    //con "tags:" se declara la parte del schema que quiero buscar equivalencia.
    Recipe.find({tags: req.params.tags}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get RecipesByDifficulty
recipeRoute.route("/recipe/difficulty/:difficulty").get((req, res, next) => {
    //con "tags:" se declara la parte del schema que quiero buscar equivalencia.
    Recipe.find({difficulty: req.params.difficulty}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get RecipesById
recipeRoute.route("/recipe/:id").get((req, res, next) => {
    Recipe.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


// Update Recipe
recipeRoute.route("/recipe/:id").put((req, res, next) => {
    Recipe.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Recipe updated successfully!");
            }
        }
    );
});

// Delete Recipe
recipeRoute.route("/recipe/:id").delete((req, res, next) => {
    Recipe.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = recipeRoute;
