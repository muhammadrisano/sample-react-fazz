import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

function Edit(props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`https://fazztrack.fwdev.online/v1/products/${id}`)
    .then((res)=>{
      const result = res.data.data
      setName(result.name)
      setPrice(result.price)
      setSize(result.size)
      setDescription(result.description)
    })
  }, [])

  const handleEdit = ()=>{
    const id = props.match.params.id
    const data = { name, price, size, description }
    axios.put(`https://fazztrack.fwdev.online/v1/products/${id}`, data)
    .then(()=>{
      alert('data berhasil di update')
      props.history.push('/')
    })
    .catch((err)=>{
      alert('edit nya bro')
    })
  }

  return (
    <div className="container">
      <h1>halaman edit {props.match.params.id}</h1>
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
          onChange={(e) => setPrice(e.target.value)}
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
        <Button title="Edit Product" color="primary" onClick={handleEdit}/>
      </div>
    </div>
  )
}

export default Edit
