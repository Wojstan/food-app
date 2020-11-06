import React from 'react'

export default function BigIndicator({ value, title, cssName }) {
  return (
    <div className={cssName}>
      <h3 className="big-number">
        {value}
      </h3>
      <p className="small-white">{title}</p>
    </div>
  )
}
