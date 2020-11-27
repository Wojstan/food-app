import React from "react";

const MealTable = ({ data }) => {
  return (
    <div className="table-container">
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
          {data.map((row, i) => (
            <tr key={i} className="item-table">
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
  );
};

export default MealTable;
