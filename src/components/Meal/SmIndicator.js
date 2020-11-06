import React from 'react'

export default function SmIndicator({ value, title, cssName }) {
  return (
    <div className={cssName}>
      <p className="small-white">{title}</p>
      <h3 className="mid-number">
        {value}
      </h3>
    </div>
  )
}
