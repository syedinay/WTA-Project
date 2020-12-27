import React, { Component } from 'react'
import './Home.css';
export default class Home extends Component {
  render() {
    return (
       
        <div className="Webpage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <div className="topbar">
            <p>Welcome,Teacher</p>
            <span class="material-icons" style={{fontSize: '64px',
            marginRight:'-1200px'}}>account_circle</span>
        </div>
        <div className="sidebar">
          <a className="active" href="#home">Home</a>
          <a href="#news">View class</a>
          <a href="#contact">Create Class</a>
          <a href="#about">Logout</a>
        </div>
      </div>
    )
  }
}