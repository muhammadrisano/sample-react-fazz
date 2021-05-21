import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

function Edit(props) {
  return (
    <div className="container">
      <h1>halaman edit</h1>
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
        <Button title="Edit Product" color="primary" />
      </div>
    </div>
  )
}

export default Edit
