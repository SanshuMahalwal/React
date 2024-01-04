import React from 'react'
import Project from '../Project'

function Projects({ projects }) {
  return (
    <div className="container">
      {
        projects.map((project) => 
          <Project project={project} projects={projects}/>
        )
      }
           
    </div>
  )
}


export default Projects