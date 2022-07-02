import React from 'react'
import './Style/Card.css'
function Card(props) {
  return (
    <div className="card">
    {props.children}
    </div>
  )
}

export default Card