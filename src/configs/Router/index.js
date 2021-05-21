import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Home from '../../pages/Home'
import Add from '../../pages/Add'
import Edit from '../../pages/Edit'

function Router() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={Add} />
      <Route exact path="/edit/:id" component={Edit} />
    </BrowserRouter>
  )
}

export default Router
