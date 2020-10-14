import React, { useState } from "react";
import HomePicture from "../static/img/home.png";
import arrowLeft from "../static/img/left.png";
import arrowRight from "../static/img/right.png";
import { Link } from "react-router-dom";

import Meal from "./Meal";

const meals = [
  [
    { title: "Kanapka letnia z szynką drobiową", link: "/breakfast" },
    {
      title:
        "Koktajl lub Deser Prażone jabłka z cynamonem i płatkami owsianymi",
      link: "/second",
    },
    { title: "Szybka ala grecka sałatka z pieczywem", link: "/lunch" },
    { title: "Zapiekanka z kurczakiem i brokułami", link: "/dinner" },
    { title: "Jogurt z owocami i orzechami", link: "/sapper" },
  ],
  [
    { title: "Kanapka letnia z szynką drobiową", link: "/breakfast" },
    {
      title:
        "Koktajl lub Deser Prażone jabłka z cynamonem i płatkami owsianymi",
      link: "/second",
    },
    { title: "Szybka ala grecka sałatka z pieczywem", link: "/lunch" },
    { title: "Zapiekanka z kurczakiem i brokułami", link: "/dinner" },
    { title: "Jogurt z owocami i orzechami", link: "/sapper" },
  ],

  [
    {
      title: "Jajecznica lub jajo gotowane z warzywami i pieczywem",
      link: "/breakfast",
    },
    {
      title: "Koktajl kiwi banan szpinak",
      link: "/second",
    },
    {
      title: "Sałatka makaronowa z pesto, pomidorami i serem",
      link: "/lunch",
    },
    {
      title: "Grillowana pierś z kurczaka z warzywami na patelnię",
      link: "/dinner",
    },
    { title: "Kapusta biała z koperkiem", link: "/sapper" },
  ],

  [
    {
      title: "Jajecznica lub jajo gotowane z warzywami i pieczywem",
      link: "/breakfast",
    },
    {
      title: "Koktajl kiwi banan szpinak",
      link: "/second",
    },
    {
      title: "Sałatka makaronowa z pesto, pomidorami i serem",
      link: "/lunch",
    },
    {
      title: "Grillowana pierś z kurczaka z warzywami na patelnię",
      link: "/dinner",
    },
    { title: "Kapusta biała z koperkiem", link: "/sapper" },
  ],

  [
    {
      title: "Kanapka lub Tosty z mozzarellą i bazylią",
      link: "/breakfast",
    },
    {
      title: "Sałatka owocowa z jogurtem i slonecznikiem",
      link: "/second",
    },
    {
      title: "Dietetyczna sałatka gyros",
      link: "/lunch",
    },
    {
      title: "Dietetyczny gulasz z kurczakiem i kaszą",
      link: "/dinner",
    },
    { title: "Zupa krem z brokułów na ostro", link: "/sapper" },
  ],

  [
    {
      title: "Kanapka lub Tosty z mozzarellą i bazylią",
      link: "/breakfast",
    },
    {
      title: "Sałatka owocowa z jogurtem i slonecznikiem",
      link: "/second",
    },
    {
      title: "Dietetyczna sałatka gyros",
      link: "/lunch",
    },
    {
      title: "Dietetyczny gulasz z kurczakiem i kaszą",
      link: "/dinner",
    },
    { title: "Zupa krem z brokułów na ostro", link: "/sapper" },
  ],

  [
    {
      title: "Kanapka z awokado, z drobiem i warzywami",
      link: "/breakfast",
    },
    {
      title: "Koktajl pomarańczowy z natką",
      link: "/second",
    },
    {
      title: "Sernik light",
      link: "/lunch",
    },
    {
      title: "Tortilla z kurczakiem i warzywami",
      link: "/dinner",
    },
    { title: "Zimowa zupa pomidorowa z passaty", link: "/sapper" },
  ],
];
const date = new Date();

function Home() {
  const [today, setToday] = useState(date.getDay());
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
    <div className="home-card">
      <div className="home-content">
        <div className="home-head">
          <span>
            <h1>Food</h1>
            <p className="day">Dzień - {today + 1}</p>
          </span>
          <span>
            <button className="switch-day" onClick={() => changeDay(false)}>
              <img src={arrowLeft} alt="" />
            </button>
            <button className="switch-day" onClick={() => changeDay(true)}>
              <img src={arrowRight} alt="" />
            </button>
          </span>
        </div>

        <div className="meal-container">
          {meals[today].map((row, i) => (
            <Link to={row.link} className="route-link">
              <Meal title={row.title} number={i + 1} />
            </Link>
          ))}
        </div>
      </div>

      <img src={HomePicture} alt="" />
    </div>
  );
}

export default Home;
