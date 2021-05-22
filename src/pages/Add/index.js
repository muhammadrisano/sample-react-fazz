import React, {useState} from 'react'
import './add.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import axios from 'axios'

function AddProduct(props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = ()=>{
    axios.post('https://fazztrack.fwdev.online/v1/products/', { name, price, size, description})
    .then((res)=>{
      alert('data berhasil di inputkan')
      props.history.push('/')
    })
  }
  return (
    <div className="container">
      <h1>Add Product</h1>
      <div className="wrapper-form">
        <Input
          label="Nama"
          type="text"
          name="nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <Input
          label="Price"
          type="number"
          name="price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          placeholder="name"
        />
        <Input
          label="Size"
          type="text"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="size"
        />
        <Input
          label="Description"
          type="text"
          name="Description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button title="Simpan Product" color="primary" onClick={handleAdd}/>
      </div>
    </div>
  )
}

export default AddProduct
