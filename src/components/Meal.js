import React, { useState, useEffect } from "react";
import Header from "./Meal/Header";
import ingrid from "../static/img/ingrid.png";
import list from "../static/img/list.png";
import MealTable from "./Meal/MealTable";
import BigIndicator from "./Meal/BigIndicator";
import SmIndicator from "./Meal/SmIndicator";
import List from "./Meal/List";

function Meal({ match }) {
  const mealId = match.params.id.charAt(0);
  const dayId = match.params.id.charAt(2) * 1 + 1;
  const [food, setFood] = useState({
    breakfast: { details: [], ingrids: [], recipe: "" },
  });
  const [summedValues, setSummedValues] = useState({
    kcal: 0,
    fiber: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });

  console.log(mealId);

  useEffect(() => {
    const sumDetails = () => {
      if (food.breakfast.details.length !== 0) {
        setSummedValues(
          food.breakfast.details.reduce(function (previousValue, currentValue) {
            return {
              kcal: previousValue.kcal + currentValue.kcal,
              fiber: previousValue.fiber + currentValue.fiber,
              carbs: previousValue.carbs + currentValue.carbs,
              fat: previousValue.fat + currentValue.fat,
              protein: previousValue.protein + currentValue.protein,
            };
          })
        );
      }
    };
    sumDetails();
  }, [food]);

  useEffect(() => {
    const fetchData = async () => {
      const getResponse = await fetch(`http://localhost:4454/food/${dayId}`);
      const data = await getResponse.json();
      setFood(data);
    };
    fetchData();
  }, [dayId]);

  return (
    <div className="container">
      <main>
        <Header title="Śniadanie" dayID={dayId} />

        <div className="indicators">
          <div className="row">
            <div className="col-md-7">
              <List
                title="Składniki"
                img={ingrid}
                data={food.breakfast.ingrids}
                cssName="ingridients"
              />
              <List
                title="Przepis"
                img={list}
                data={food.breakfast.ingrids}
                cssName="recipe"
              />

              <div className="row">
                <div className="col-lg-6">
                  <BigIndicator
                    title="składników"
                    value={food.breakfast.ingrids.length}
                    cssName="ingrid-number"
                  />
                </div>
                <div className="col-lg-6">
                  <BigIndicator
                    title="kcal"
                    value={Math.round(summedValues.kcal * 10) / 10}
                    cssName="calories"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="row">
                <div className="col-lg-6">
                  <SmIndicator
                    value={Math.round(summedValues.protein * 10) / 10}
                    title="Białko [g]"
                    cssName="protein"
                  />
                  <SmIndicator
                    value={Math.round(summedValues.fat * 10) / 10}
                    title="Tłuszcze [g]"
                    cssName="fat"
                  />
                </div>
                <div className="col-lg-6">
                  <SmIndicator
                    value={Math.round(summedValues.carbs * 10) / 10}
                    title="Węgle [g]"
                    cssName="carbs"
                  />
                  <SmIndicator
                    value={Math.round(summedValues.fiber * 10) / 10}
                    title="Błonnik [g]"
                    cssName="fiber"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <MealTable data={food.breakfast.details} />
      </main>
    </div>
  );
}

export default Meal;
