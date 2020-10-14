import React, { useState } from "react";
import "../static/Meal.css";
import header from "../static/img/header.png";
import arrow from "../static/img/Arrow.png";
import ingrid from "../static/img/ingrid.png";
import list from "../static/img/list.png";

const details = [
  [
    {
      product: "Sałata",
      weight: 1,
      shopweight: 1,
      miara: "wg uznania",
      kcal: 0.1,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0.9,
    },
    {
      product: "Szynka delikatesowa z kurczaka",
      weight: 36,
      shopweight: 38,
      miara: "2*plaster",
      kcal: 44.3,
      protein: 6.6,
      fat: 2,
      carbs: 0,
      fiber: 0,
      water: 26.4,
    },
    {
      product: "Pomidor",
      weight: 192,
      shopweight: 200,
      miara: "średnia sztuka",
      kcal: 28.8,
      protein: 1.7,
      fat: 0.4,
      carbs: 6.9,
      fiber: 2.3,
      water: 182,
    },
    {
      product: "Kiełki z rzodkiewki",
      weight: 8,
      shopweight: 8,
      miara: "1 łyżka",
      kcal: 3,
      protein: 0.3,
      fat: 0.2,
      carbs: 0.3,
      fiber: 0.2,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 80,
      shopweight: 80,
      miara: "2*kromka",
      kcal: 177.6,
      protein: 3.9,
      fat: 3.4,
      carbs: 33,
      fiber: 0,
      water: 0,
    },
    {
      product: "Marchew",
      weight: 105,
      shopweight: 142,
      miara: "średnia sztuka",
      kcal: 28.4,
      protein: 1.1,
      fat: 0.2,
      carbs: 9.1,
      fiber: 3.8,
      water: 94.2,
    },
    {
      product: "Kiełki (brokułowe rzodkiewkowe)",
      weight: 8,
      shopweight: 8,
      miara: "1 łyzka",
      kcal: 0.1,
      protein: 0.1,
      fat: 0,
      carbs: 0.4,
      fiber: 0,
      water: 0,
    },
    {
      product: "Serek kanapkowy Piątnica lekki",
      weight: 20,
      shopweight: 20,
      miara: "2*porcja",
      kcal: 31.6,
      protein: 1.8,
      fat: 2.4,
      carbs: 0.7,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Sałata",
      weight: 1,
      shopweight: 1,
      miara: "wg uznania",
      kcal: 0.1,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0.9,
    },
    {
      product: "Szynka delikatesowa z kurczaka",
      weight: 36,
      shopweight: 38,
      miara: "2*plaster",
      kcal: 44.3,
      protein: 6.6,
      fat: 2,
      carbs: 0,
      fiber: 0,
      water: 26.4,
    },
    {
      product: "Pomidor",
      weight: 192,
      shopweight: 200,
      miara: "średnia sztuka",
      kcal: 28.8,
      protein: 1.7,
      fat: 0.4,
      carbs: 6.9,
      fiber: 2.3,
      water: 182,
    },
    {
      product: "Kiełki z rzodkiewki",
      weight: 8,
      shopweight: 8,
      miara: "1 łyżka",
      kcal: 3,
      protein: 0.3,
      fat: 0.2,
      carbs: 0.3,
      fiber: 0.2,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 80,
      shopweight: 80,
      miara: "2*kromka",
      kcal: 177.6,
      protein: 3.9,
      fat: 3.4,
      carbs: 33,
      fiber: 0,
      water: 0,
    },
    {
      product: "Marchew",
      weight: 105,
      shopweight: 142,
      miara: "średnia sztuka",
      kcal: 28.4,
      protein: 1.1,
      fat: 0.2,
      carbs: 9.1,
      fiber: 3.8,
      water: 94.2,
    },
    {
      product: "Kiełki (brokułowe rzodkiewkowe)",
      weight: 8,
      shopweight: 8,
      miara: "1 łyzka",
      kcal: 0.1,
      protein: 0.1,
      fat: 0,
      carbs: 0.4,
      fiber: 0,
      water: 0,
    },
    {
      product: "Serek kanapkowy Piątnica lekki",
      weight: 20,
      shopweight: 20,
      miara: "2*porcja",
      kcal: 31.6,
      protein: 1.8,
      fat: 2.4,
      carbs: 0.7,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Jaja kurze",
      weight: 100,
      shopweight: 115,
      miara: "2*sztuka",
      kcal: 140,
      protein: 12.5,
      fat: 9.7,
      carbs: 0.6,
      fiber: 0,
      water: 76.2,
    },
    {
      product: "Pomidor koktajlowy",
      weight: 200,
      shopweight: 200,
      miara: "10 sztuk",
      kcal: 30,
      protein: 1.8,
      fat: 0.4,
      carbs: 7.2,
      fiber: 2.4,
      water: 0,
    },
    {
      product: "Zioła",
      weight: 1,
      shopweight: 1,
      miara: "szczypta",
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0,
    },
    {
      product: "Mix sałat",
      weight: 80,
      shopweight: 80,
      miara: "2*garstka",
      kcal: 15.2,
      protein: 1.2,
      fat: 0.2,
      carbs: 1.1,
      fiber: 0,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 80,
      shopweight: 80,
      miara: "2*kromka",
      kcal: 177.6,
      protein: 3.9,
      fat: 3.4,
      carbs: 33,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Jaja kurze",
      weight: 100,
      shopweight: 115,
      miara: "2*sztuka",
      kcal: 140,
      protein: 12.5,
      fat: 9.7,
      carbs: 0.6,
      fiber: 0,
      water: 76.2,
    },
    {
      product: "Pomidor koktajlowy",
      weight: 200,
      shopweight: 200,
      miara: "10 sztuk",
      kcal: 30,
      protein: 1.8,
      fat: 0.4,
      carbs: 7.2,
      fiber: 2.4,
      water: 0,
    },
    {
      product: "Zioła",
      weight: 1,
      shopweight: 1,
      miara: "szczypta",
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0,
    },
    {
      product: "Mix sałat",
      weight: 80,
      shopweight: 80,
      miara: "2*garstka",
      kcal: 15.2,
      protein: 1.2,
      fat: 0.2,
      carbs: 1.1,
      fiber: 0,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 80,
      shopweight: 80,
      miara: "2*kromka",
      kcal: 177.6,
      protein: 3.9,
      fat: 3.4,
      carbs: 33,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Mozarella light",
      weight: 60,
      shopweight: 60,
      miara: "4*plaster",
      kcal: 94.2,
      protein: 11.4,
      fat: 5.1,
      carbs: 0.6,
      fiber: 0,
      water: 34.2,
    },
    {
      product: "Pomidor",
      weight: 192,
      shopweight: 200,
      miara: "średnia sztuka",
      kcal: 28.8,
      protein: 1.7,
      fat: 0.4,
      carbs: 6.9,
      fiber: 2.3,
      water: 182,
    },
    {
      product: "Bazylia świeża",
      weight: 2,
      shopweight: 2,
      miara: "szczypta",
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 120,
      shopweight: 120,
      miara: "3*kromka",
      kcal: 266.4,
      protein: 5.9,
      fat: 5,
      carbs: 49.4,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Mozarella light",
      weight: 60,
      shopweight: 60,
      miara: "4*plaster",
      kcal: 94.2,
      protein: 11.4,
      fat: 5.1,
      carbs: 0.6,
      fiber: 0,
      water: 34.2,
    },
    {
      product: "Pomidor",
      weight: 192,
      shopweight: 200,
      miara: "średnia sztuka",
      kcal: 28.8,
      protein: 1.7,
      fat: 0.4,
      carbs: 6.9,
      fiber: 2.3,
      water: 182,
    },
    {
      product: "Bazylia świeża",
      weight: 2,
      shopweight: 2,
      miara: "szczypta",
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 120,
      shopweight: 120,
      miara: "3*kromka",
      kcal: 266.4,
      protein: 5.9,
      fat: 5,
      carbs: 49.4,
      fiber: 0,
      water: 0,
    },
  ],
  [
    {
      product: "Sałata",
      weight: 1,
      shopweight: 1,
      miara: "wg uznania",
      kcal: 0.1,
      protein: 0,
      fat: 0,
      carbs: 0,
      fiber: 0,
      water: 0.9,
    },
    {
      product: "Pomidor",
      weight: 192,
      shopweight: 200,
      miara: "średnia sztuka",
      kcal: 28.8,
      protein: 1.7,
      fat: 0.4,
      carbs: 6.9,
      fiber: 2.3,
      water: 182,
    },
    {
      product: "Mięso z piersi kurczaka",
      weight: 50,
      shopweight: 50,
      miara: "porcja",
      kcal: 49,
      protein: 10.8,
      fat: 0.7,
      carbs: 0,
      fiber: 0,
      water: 38.2,
    },
    {
      product: "Natka pietruszki",
      weight: 6,
      shopweight: 6,
      miara: "1 łyżeczka",
      kcal: 2.5,
      protein: 0.3,
      fat: 0,
      carbs: 0.5,
      fiber: 0.3,
      water: 5.1,
    },
    {
      product: "Awokado",
      weight: 35,
      shopweight: 52,
      miara: "59.2",
      kcal: 0.7,
      protein: 5.4,
      fat: 2.6,
      carbs: 1.2,
      fiber: 26,
      water: null,
    },
    {
      product: "Ogórek",
      weight: 55,
      shopweight: 76,
      miara: "połowa",
      kcal: 7.7,
      protein: 0.4,
      fat: 0.1,
      carbs: 1.6,
      fiber: 0.3,
      water: 52.7,
    },
    {
      product: "Chleb Lorenca Eko (żytni razowy)",
      weight: 80,
      shopweight: 80,
      miara: "2*kromka",
      kcal: 177.6,
      protein: 3.9,
      fat: 3.4,
      carbs: 33,
      fiber: 0,
      water: 0,
    },
  ],
];

const ingrids = [
  [
    "Sałata",
    "Szynka delikatesowa z kurczaka",
    "Pomidor",
    "Kiełki z rzodkiewki",
    "Chleb Lorenca Eko (żytni razowy)",
    "Marchew",
    "Kiełki (brokułowe, rzodkiewkowe)",
    "Serek kanapkowy Piątnica lekki",
  ],

  [
    "Sałata",
    "Szynka delikatesowa z kurczaka",
    "Pomidor",
    "Kiełki z rzodkiewki",
    "Chleb Lorenca Eko (żytni razowy)",
    "Marchew",
    "Kiełki (brokułowe, rzodkiewkowe)",
    "Serek kanapkowy Piątnica lekki",
  ],

  [
    "Jaja",
    "Pomidor koktajlowy",
    "zioła ",
    "Mix sałat z rukolą",
    "Chleb Lorenca Eko (żytni razowy)",
  ],
  [
    "Jaja",
    "Pomidor koktajlowy",
    "zioła ",
    "Mix sałat z rukolą",
    "Chleb Lorenca Eko (żytni razowy)",
  ],
  [
    "Mozarella Zottarella light",
    "Pomidor",
    "Bazylia świeża",
    "Chleb Lorenca Eko (żytni razowy)",
  ],
  [
    "Mozarella Zottarella light",
    "Pomidor",
    "Bazylia świeża",
    "Chleb Lorenca Eko (żytni razowy)",
  ],
  [
    "Sałata ",
    "Pomidor",
    "Mięso z piersi kurczaka",
    "Natka pietruszki",
    "Awokado",
    "Ogórek",
    "Chleb Lorenca Eko (żytni razowy)",
  ],
];

const recipe1 = [
  "1. Na początku przygotowujemy marynatę do mięsa. W misce połączyć miód z olejem i sosem sojowym.",
  "2. Papryczkę chili i czosnek drobno posiekać, wrzucić do miski,następnie dodać przyprawy i całość wymieszać.",
  "3. Pierś z kurczaka opłukać, osuszyć i pokroić w niewielką kostkę.",
  "4. Mięso włożyć do miski z marynatą i dokładnie obtoczyć w płynie.",
  "5. Całość owinąć folią i wstawić do lodówki na 1- 2 godziny.",
  "6. Makaron wrzucić do osolonego wrzątku i ugotować al. dente i odcedzić.",
  "7. W tym samym czasie mięso wraz z całą marynatą przełożyć na 8. patelnię i usmażyć na średnim ogniu.",
  "9. Brokuły natomiast zalać zimną wodą, dodać sól, cukier i ugotować.",
  "10. Podczas gotowania i smażenia składników zapiekanki należy przygotować sos.",
  "11. Mozzarellę drobno pokroić, następnie dodać do niej jajko, śmietanę oraz przyprawy icałość bardzo dokładnie wymieszać. ",
  "12. Naczynie żaroodporne wysmarować tłuszczem i obsypać bułka tartą.",
  "13. Na dno naczynia żaroodpornego nałożyć 2/3 ugotowanego makaronu, następnie wyłożyć kawałki usmażonego kurczaka, a na mięso pozostały makaron.",
  "14. Różyczki brokułów podzielić na drobne kawałki i równomiernie ułożyć w naczyniu. Na koniec rozsmarować sos serowy.",
  "15. Zapiekankę piec w piekarniku nagrzanym do 180 stopni przez 10-15 minut, aż ser się zapiecze.",
];

const normalArrow = "rotate(0deg)";
const rotateArrow = "rotate(90deg)";

const date = new Date();

function Breakfast() {
  const [stylerI, setStylerI] = useState(normalArrow);
  const [rotateI, setRotateI] = useState(false);
  const [stylerR, setStylerR] = useState(normalArrow);
  const [rotateR, setRotateR] = useState(false);
  const today = date.getDay();

  const handleClickI = () => {
    if (rotateI === false) {
      setStylerI(rotateArrow);
      setRotateI(!rotateI);
    } else {
      setStylerI(normalArrow);
      setRotateI(!rotateI);
    }
  };

  const handleClickR = () => {
    if (rotateR === false) {
      setStylerR(rotateArrow);
      setRotateR(!rotateR);
    } else {
      setStylerR(normalArrow);
      setRotateR(!rotateR);
    }
  };

  return (
    <div className="container meal-card mb-5">
      <div className="meal-header row">
        <div className="meal-header-title">
          <h5>Śniadanie </h5> <h3>Dzien {today + 1}</h3>
        </div>
        <img className="img-fluid" src={header} alt="" />
      </div>

      <div className="row px-2">
        <div className="col-md-7 ">
          <div className=" mt-4 ingridients">
            <div className="ingridients-header">
              <span className="flex">
                <img className="mr-4" src={ingrid} alt="" />
                <p>Składniki</p>
              </span>
              <button
                style={{
                  transform: stylerI,
                }}
                onClick={handleClickI}
                type="button"
                data-toggle="collapse"
                data-target={"#ingrid"}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={arrow} alt="" />
              </button>
            </div>
            <div className="collapse" id={"ingrid"}>
              {ingrids[today].map((row, i) => (
                <p className="ingrid-row">
                  {i + 1}. {row}
                </p>
              ))}
            </div>
          </div>

          <div className=" mt-4 recipe">
            <div className="recipe-header">
              <span className="flex">
                <img className="mr-4" src={list} alt="" />
                <p>Przepis</p>
              </span>
              <button
                type="button"
                style={{
                  transform: stylerR,
                }}
                onClick={handleClickR}
                data-toggle="collapse"
                data-target={"#recipe"}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src={arrow} alt="" />
              </button>
            </div>
            <div className="collapse" id={"recipe"}>
              {recipe1.map((row) => (
                <p className="recipe-row">{row}</p>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="ingrid-number mt-4">
                <h3 className="big-number mb-1">{ingrids[today].length}</h3>
                <p className="small-white">składników</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="calories mt-4">
                <h3 className="big-number mb-1">
                  {details[today]
                    .map((bill) => bill.kcal)
                    .reduce((acc, bill) => bill + acc)}
                </h3>
                <p className="small-white">kcal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="protein mt-4">
                <p className="small-white">Białko [g]</p>
                <h3 className="mid-number">
                  {details[today]
                    .map((bill) => bill.protein)
                    .reduce((acc, bill) => bill + acc)}
                </h3>
              </div>
              <div className="fat mt-4">
                <p className="small-white">Tłuszcze [g]</p>
                <h3 className="mid-number">
                  {details[today]
                    .map((bill) => bill.fat)
                    .reduce((acc, bill) => bill + acc)}
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="carbs mt-4">
                <p className="small-white">Węgle [g]</p>
                <h3 className="mid-number">
                  {" "}
                  {details[today]
                    .map((bill) => bill.carbs)
                    .reduce((acc, bill) => bill + acc)}
                </h3>
              </div>
              <div className="fiber mt-4">
                <p className="small-white">Błonnik [g]</p>
                <h3 className="mid-number">
                  {" "}
                  {details[today]
                    .map((bill) => bill.fiber)
                    .reduce((acc, bill) => bill + acc)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <table className="mt-4">
          <thead>
            <th>produkt</th>
            <th>waga[g]</th>
            <th>waga sklep[g]</th>
            <th>miara</th>
            <th>energia[kcal]</th>
            <th>białko[g]</th>
            <th>tłuszcze[g]</th>
            <th>węgle[g]</th>
            <th>błonnik[g]</th>
            <th>woda[ml]</th>
          </thead>
          <tbody>
            {details[today].map((row) => (
              <tr className="item-table">
                <td>{row.product}</td>
                <td>{row.weight}</td>
                <td>{row.shopweight}</td>
                <td>{row.miara}</td>
                <td>{row.kcal}</td>
                <td>{row.protein}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.fiber}</td>
                <td>{row.water}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Breakfast;
