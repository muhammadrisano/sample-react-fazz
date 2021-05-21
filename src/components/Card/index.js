import React from 'react'
import './card.css'
import Button from '../Button'
function Card({ name, price, size, description, onDelete, onEdit }) {
  return (
    <div className="card">
      <h4 className="card-title">{name}</h4>
      <h5 className="price">Rp. {price}</h5>
      <h6 className="size">Size : {size}</h6>
      <div className="content">
        <p>{description}</p>
      </div>
      <div className="wrapper-btn">
        <Button color="info" title="Edit" onClick={onEdit} />
        <Button color="warning" title="Hapus" onClick={onDelete} />
      </div>
    </div>
  )
}

export default Card
