import React from 'react'
import './add.css'
import Input from '../../components/Input'
import Button from '../../components/Button'

function AddProduct() {
  return (
    <div className="container">
      <h1>Add Product</h1>
      <div className="wrapper-form">
        <Input
          label="Nama"
          type="text"
          name="nama"
          placeholder="name"
        />
        <Input
          label="Price"
          type="number"
          name="price"
          placeholder="name"
        />
        <Input
          label="Size"
          type="text"
          name="size"
          placeholder="size"
        />
        <Input
          label="Description"
          type="text"
          name="Description"
          placeholder="Description"
        />
        <Button title="Simpan Product" color="primary"/>
      </div>
    </div>
  )
}

export default AddProduct
