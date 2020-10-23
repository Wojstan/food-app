import React from "react";
import arrow from "../static/img/Arrow.png";

function MealLink({ title, number }) {
  return (
    <div className="meal-menu">
      <span className="number">
        <h3>{number}</h3>
      </span>
      <span className="meal-text">
        <p className="title-appear">{title}</p>
      </span>
      <img src={arrow} alt="" />
    </div>
  );
}

export default MealLink;
