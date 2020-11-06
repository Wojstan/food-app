import React from 'react'
import DotIcon from "./DotIcon";

export default function List({ img, title, data, cssName }) {
  return (
    <div className={cssName}>
      <header>
        <span>
          <img src={img} alt="" />
          <p>{title}</p>
        </span>
        <button
          type="button"
          data-toggle="collapse"
          data-target={`#${title}`}
          aria-expanded="false"
          aria-controls="collapse"
        >
          <DotIcon />
        </button>
      </header>
      <div className="collapse" id={title}>
        {data.map((row, i) => (
          <p>
            {i + 1}. {row}
          </p>
        ))}
      </div>
    </div>
  )
}
