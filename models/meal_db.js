const sqlite = require("better-sqlite3")
const path = require('path');
const db = new sqlite(path.resolve('DB.db'), { fileMustExist: true });

class Meal{
    #meals= require("../models/meal.json");
    
    getAllMeals(){
    return db.prepare('SELECT * FROM meals').all();
    }

    getMealById(id){
        return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
    }

     getMealReviews(){
        return db.prepare('SELECT * FROM reviews').all();
    }
     addMealReview(review){
        const reviewRes = db.run('INSERT INTO reviews (id, reviewer_name, image, review, meal_id) VALUES (${review.id},${review.name},${review.img},${review.review},${review.meal_id})');

        if (reviewRes.changes){
            return ("Review added")
        }else{
        return ("Review added")
        }
    }

    getRating(id){
        return db.prepare('select AVG(rating) FROM reviews WHERE meal_id == ?').get(id);
    }
}

    
module.exports = new Meal();