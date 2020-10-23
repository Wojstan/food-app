const express = require('express');
const app = express();
const PORT = 4454;
const food = require('./food.json');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.get('/food', (req, res) => {
  res.send(food);
});

app.get('/food/:foodId', (req, res) => {
  const foundMeal = findMeal(req, res);

  res.send(foundMeal);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function findMeal(req, res) {
  const mealId = parseInt(req.params.foodId);

  const foundMeal = food.find(row => row.id === mealId);
  if (!foundMeal) {
    throw res.status(404).send({errorMessage: `Coudnt find meal`});
  }
  return foundMeal;
}