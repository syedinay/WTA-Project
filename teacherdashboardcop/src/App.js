import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        <Router>
          <Sidebar />
          
          <Route path='/' component={Main} />
        </Router>
        <p>Hello world</p>
      </div>
    )
  }
}

export default App