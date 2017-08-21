import React from 'react'

var skills = ['HTML5/CSS3','CSS Animations', 'Javascript', 'Bootstrap', 'SASS', 'React', 'Node', 'express.js', 'Git CLI/GitHub', 'D3.js', 'flexbox/CSS Grid', 'Python', 'C++', 'jQuery', 'ETC...']

var Skills = () => {
  return(
    <div className='skills-container'>
      <h2>My skills</h2>
      <div className='skills'>
        {
          skills.map( skill => <div className='skill'>{ skill }</div>)
        }
      </div>
    </div>
  )
}

export default Skills