const express = require('express');
const expressNunjucks = require('express-nunjucks');
const meal = require('./models/meal_db.js');
const app = express();
const port = 3000;
const isDev = app.get('env') === 'development';
const meal_router = require('./routers/meal_router.js');
// const sales_router = require('./routers/sales_router.js');
app.set('view engine', 'njk');
app.use(express.static('Public'))

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

// app.get("/index",(req,res)=>{
//     res.render('index.njk',{meals:meal.getAllMeals()})
// });

// app.get("/detail/:Id",(req,res)=>{
//     res.render('detail.njk',{meals:meal.getMealById(parseInt(req.params.Id))})
//     console.log(req.params.Id)
// });

// app.get("/:id",(req,res)=>{
//     res.render('detail.njk')
// });


// app.get("/detail/:mealId",(req,res)=>{
//     res.render('detail.njk',{meals:meal.getMealById(parseInt(req.params.mealId))})
//     console.log(req.params.Id)
// });

app.use('/',meal_router);

app.listen(port,()=>{
console.log("listening on port",port)
});


// app.listen(port, () =>{
// console.log('listening on port ${port}');
// });
