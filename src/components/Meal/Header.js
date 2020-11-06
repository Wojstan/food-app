import React from 'react'

export default function Header({ title, dayID }) {
  return (
    <header className="main-header">
      <h5>{title}</h5>
      <h3>Dzien {dayID}</h3>
    </header>
  )
}
