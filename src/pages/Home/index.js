import React, {useEffect, useState} from 'react'
import './home.css'
import Card from '../../components/Card'
import axios from 'axios'

function Home(props) {
  const [products, setProduct] = useState([])

  const getProduct = ()=>{
    axios.get('https://fazztrack.fwdev.online/v1/products/')
      .then((res) => {
        const result = res.data.data
        setProduct(result)
      })
  }
  useEffect(()=>{
    getProduct()
  },[])
  
  const handleNavigateEdit = (id)=>{
    props.history.push(`/edit/${id}`)
  }
  const handleDelete=(id)=>{
    axios.delete(`https://fazztrack.fwdev.online/v1/products/${id}`)
    .then(()=>{
      alert('delete berhasil')
      getProduct()
    })
  }

  return (
    <div className="container">
      <div className="wrapper-product">
      {products.map((item)=>
        <Card
          name={item.name}
          price={item.price}
          size={item.size}
          description={item.description}
          onEdit={() => handleNavigateEdit(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      )}
      </div>
    </div>
  )
}

export default Home
