const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const multer = require('multer');
const meals = require('../models/meal_db.js');
const path = require('path');
const storage =multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'Public/reviewImage')
    },
    filename: (req, file, cb) => {
        cb(e,Date.now()+path.extname(file.originalname))
    }
})
const upload= multer({storage:storage})

router.get("/detail/:mealId",(req,res)=>{
    res.render('detail.njk',{meals:meal.getMealById(parseInt(req.params.mealId))})
    console.log(req.params.Id)
});

router.get("/",(req,res)=>{
    res.render('index.njk',{meals:meals.getAllMeals()})
});



router.route('/:mealID/reviews')
.get(async (req, res, next)=>{
    try{
        const reviews= await meals.getMealReviews(req.params.mealID);
        res.send(JSON.stringify(reviews));
    }catch(e){
        next(e);
    }
    })
    .post(async (req, res, next)=>{
        try{
            console.log(req.body);
            const info= await meals.addMealsReview(req.body);
            res.status(201).send(JSON.stringify(info)); 
        }catch(e){
            next(e);
        }
    })

    router.post(("/upload", upload.single("image"),(req, res) => {
        try{
            console.log("Image uploaded");
        }catch(e){
            next(e)
        }
    }));