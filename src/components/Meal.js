import React, { useState, useEffect } from "react";
import header from "../static/img/header.png";
import ingrid from "../static/img/ingrid.png";

function Meal({ match }) {
  const mealId = match.params.id.charAt(0);
  const dayId = match.params.id.charAt(2) * 1 + 1;
  const [food, setFood] = useState({
    breakfast: { details: [], ingrids: [], recipe: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      const getResponse = await fetch(`http://localhost:4454/food/${dayId}`);
      const data = await getResponse.json();
      setFood(data);
    };
    fetchData();
  }, [dayId]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <header>
            <div className="title">
              <h5>Śniadanie</h5>
              <h3>Dzien {dayId}</h3>
            </div>
            <img className="img-fluid" src={header} alt="" />
          </header>
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="ingridients">
              <div className="ingridients-header">
                <span className="flex">
                  <img className="mr-4" src={ingrid} alt="" />
                  <p>Składniki</p>
                </span>
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target={"#ingrid"}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                ></button>
              </div>
              <div className="collapse" id={"ingrid"}>
                {food.breakfast.ingrids.map((row, i) => (
                  <p className="ingrid-row">
                    {i + 1}. {row}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <table>
            <thead>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              {food.breakfast.details.map((row) => (
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
    </main>
  );
}

export default Meal;
