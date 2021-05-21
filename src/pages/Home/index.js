import React from 'react'
import './home.css'
import Card from '../../components/Card'
function Home() {
  const handleDelete = ()=>{
    const confirmDelete = window.confirm('hello')
    alert(confirmDelete)

  }
  return (
    <div className="container">
      <Card
        name="Sepatu baru"
        price="10000"
        size="M"
        description="hello world"
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Home
