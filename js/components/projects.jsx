import React from 'react'

var Projects = () => {
  return(
    <div className='projects-container'>
      <h2>Proyectos</h2>
      <div className='project'>
        <h3>BuzzyBee.io</h3>
        <p>Soy un contribuidor activo del proyecto <a target='_blank' href='http://www.buzzybee.io'>BuzzyBee</a> cuyo proposito es ayudar a encontrar trabajo a desarrolladores de software ubicados principalmente en el estado de California, Estados Unidos. Este es el primer proyecto en el que he participado como un desarrollador Full-Stack, usando también herramientas como grunt.</p>
      </div>
      <div className='project'>
        <h3>Proyectos de <a target='_blank' href='https://www.freecodecamp.org'>FreeCodeCamp</a></h3>
        <p>Tengo Múltiples Proyectos de FCC entre ellos: Un Juego Roguelike hecho con React, Una 'leaderboard' hecha con Redux, entre muchos otros, puede verlos todos En Mi <a target='_blank' href='https://www.freecodecamp.org/hernanmendez'>perfil de FreeCodeCamp</a></p>
      </div>
    </div>
  )
}

export default Projects