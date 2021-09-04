import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form/form'
import Header from './components/header/header'
import About from './components/about/about'
import List from './components/list/list'
import reportWebVitals from './reportWebVitals';
import Particles from 'react-particles-js'
import './index.css'


ReactDOM.render(
  
  <React.StrictMode>
    <Particles
      className="particle-canvas" 
      params={{
        particles: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#05c0a1"
            }
          },
      }}
    
    />
    <Form />
    <Header />
    <About />
    <List />  
  </React.StrictMode>,
  
  document.getElementById('root')
);


reportWebVitals();
