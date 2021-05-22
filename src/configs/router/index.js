import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Add from '../../pages/Add'
import Edit from '../../pages/Edit'
import Navbar from '../../components/Navbar'

function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
