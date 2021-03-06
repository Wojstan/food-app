import React from "react";
import arrow from "../static/img/arrow.png";

function MealLink({ title, number }) {
  return (
    <li key={number}>
      <div className="number">
        <h3>{number}</h3>
      </div>
      <div className="meal-text">
        <p className="title-appear">{title}</p>
      </div>
      <img src={arrow} alt="" />
    </li>
  );
}

export default MealLink;
