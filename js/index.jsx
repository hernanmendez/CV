import React from 'react'
import { render } from 'react-dom'
import Skills from './components/skills.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import Projects from './components/projects.jsx'

var App = () => {
  return(
    <div className='container'>
      <p>
        <h1>Hernán Méndez</h1>
        hernan21112001@gmail.com
        <br />
        Ñuñoa, Santiago, CL
      </p>
      <Skills />
      <Projects />
      <PersonalInfo />
    </div>
  )
}

render(<App />,document.getElementById('app'))