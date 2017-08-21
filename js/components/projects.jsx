import React from 'react'

var Projects = () => {
  return(
    <div className='projects-container'>
      <h2>Projects</h2>
      <div className='project'>
        <h3>BuzzyBee.io</h3>
        <p>I'm an active contributor of the <a target='_blank' href='http://www.buzzybee.io'>BuzzyBee</a> project, which aims to help other software developers to get job opportunities and is the first project where I've participated as a full-stack developer</p>
      </div>
      <div className='project'>
        <h3>Projects from <a target='_blank' href='https://www.freecodecamp.org'>FreeCodeCamp</a></h3>
        <p>I have Multiple projects on FCC some of them are: A Roguelike game made with react, a leaderboard using redux, among many others, you can see them all here on my <a target='_blank' href='https://www.freecodecamp.org/hernanmendez'>FreeCodeCamp profile</a></p>
      </div>
    </div>
  )
}

export default Projects