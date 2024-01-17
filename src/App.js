import React from 'react';
import logo from './logo.svg'
function App(){
  return (
    <React.Fragment>
      <h3>Learning React</h3>
      <img src={logo} alt='logo' width={120}/>
      <p>
      React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React's main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>


    </React.Fragment>
  )

}
export default App;