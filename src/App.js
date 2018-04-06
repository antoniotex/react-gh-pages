import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Menu from './menu'
import Home from './home'
import Sobre from './sobre'
import Servicos from './servicos'
import Contato from './contato'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/contato' component={Contato} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
