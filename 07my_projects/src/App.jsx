import { Route, Routes } from 'react-router-dom'
import { Home, Projects, Header, Footer } from './components'

function App() {

  const projects = [
    {
      id : 1,
      name : "To Do App ",
      desc : "Some amazing functionalities for a great user experience. Add, check/uncheck, delete individual todo or reset the list with an interactive UI.",
      img : '/todo_app.jpg',
      tech : ["React", "Bootstrap","Javascript"]
    },
    {
      id : 2,
      name : "Password generator",
      desc : "Utilises the useEffect, useCallback, useState hooks to generate a password of your desired length. Also, number and characters can be used optionally.",
      img : '/password_generator.jpg',
      tech : ["React", "Bootstrap","Javascript"]
    },
    {
      id : 3,
      name : "Currency converter",
      desc : "Uses a custom hook to fetch currency conversion info through API, a reusable component and useEffect hook to dynamically change values as per user selected options. A few other good functionalities included.",
      img : '/currency_converter.jpg',
      tech : ["React", "Bootstrap","Javascript"]
    },
    {
      id : 4,
      name : "Shopping App",
      desc : "An e-commerce web application from scratch utilising MVC architecture in Node.js and Express.js. Implemented multiple REST APIs, user authentication and authorisation using Passport.js, data validation for client-side(Bootstrap) and server side(Joi), session management, payment integration using PayU and interacted with databases using MongoDB.",
      img : '/shopping_app.jpg',
      tech : ["MongoDB", "Express", "Node", "Javascript", "Bootstrap"]
    },{
      id : 5,
      name : "Weather App",
      desc : "Fetches weather data using Openweather API and displays it using DOM manipulation. Extensively used bootstrap frameork for frontend styling.",
      img : '/weather_app.jpg',
      tech : ["Node", "Express", "Bootstrap", "Javascript"]
    },{
      id : 6,
      name : "Calculator",
      desc : "A simple calculator using HTML, CSS and vanilla JS, utilising DOM manipulation.",
      img : '/background_changer.jpg',
      tech : ["Javascript"]
    }
  ]

  return (
    <>
      <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects projects={projects}/>}/>
      </Routes>

      <Footer/>
    </>
    
  )
}

export default App
