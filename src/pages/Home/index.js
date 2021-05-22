import React from 'react'
import './home.css'
import Card from '../../components/Card'
function Home() {

  return (
    <div className="container">
      <Card
        name="Sepatu baru"
        price="10000"
        size="M"
        description="hello world"
      />
    </div>
  )
}

export default Home
