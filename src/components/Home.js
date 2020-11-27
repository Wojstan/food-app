import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePicture from "../static/img/home.png";
import arrowLeft from "../static/img/left.png";
import arrowRight from "../static/img/right.png";

import MealLink from "./MealLink";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFood } from "../Actions/food";

export const Home = ({ getFood, food }) => {
  const [today, setToday] = useState(new Date().getDay());

  useEffect(() => {
    getFood(today);
  }, [today, getFood]);

  const changeDay = (flag) => {
    if (flag === false) {
      if (today === 0) {
        setToday(6);
      } else {
        setToday(today - 1);
      }
    } else {
      if (today === 6) {
        setToday(0);
      } else {
        setToday(today + 1);
      }
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <header>
          <div className="logo">
            <h1>Food</h1>
            <p className="day">Dzień - {today + 1}</p>
          </div>
          <div className="buttons">
            <button className="switch-day" onClick={() => changeDay(false)}>
              <img src={arrowLeft} alt="" />
            </button>
            <button className="switch-day" onClick={() => changeDay(true)}>
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </header>

        <nav>
          <ul>
            {food.meals.map((row, i) => (
              <Link
                key={i}
                to={`meal/${i + 1}-${today}`}
                style={{ textDecoration: "none" }}
              >
                <MealLink title={row.title} number={i + 1} />
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <img src={HomePicture} alt="" />
    </div>
  );
};

Home.propTypes = {
  food: PropTypes.object.isRequired,
  getFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food.food,
});

export default connect(mapStateToProps, { getFood })(Home);
