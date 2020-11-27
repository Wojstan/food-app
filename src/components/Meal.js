import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "./Meal/Header";
import ingrid from "../static/img/ingrid.png";
import list from "../static/img/list.png";
import MealTable from "./Meal/MealTable";
import BigIndicator from "./Meal/BigIndicator";
import SmIndicator from "./Meal/SmIndicator";
import List from "./Meal/List";
import { getFood } from "../Actions/food";

export const Meal = ({ match, getFood, food }) => {
  const dayId = match.params.id.charAt(2) * 1;

  useEffect(() => {
    console.log(dayId);
    getFood(dayId);
  }, [getFood, dayId]);

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
                  <BigIndicator title="kcal" value={512} cssName="calories" />
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="row">
                <div className="col-lg-6">
                  <SmIndicator
                    value={80}
                    title="Białko [g]"
                    cssName="protein"
                  />
                  <SmIndicator value={54} title="Tłuszcze [g]" cssName="fat" />
                </div>
                <div className="col-lg-6">
                  <SmIndicator value={12} title="Węgle [g]" cssName="carbs" />
                  <SmIndicator value={54} title="Błonnik [g]" cssName="fiber" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <MealTable data={food.breakfast.details} />
      </main>
    </div>
  );
};

Meal.propTypes = {
  match: PropTypes.object.isRequired,
  getFood: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food.food,
});

export default connect(mapStateToProps, { getFood })(Meal);
