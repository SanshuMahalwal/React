import React from 'react'

function Project({ project, projects }) {
  return (
    <div key={project.id} className="row my-4 p-3">
        {
          projects.indexOf(project) % 2 === 0 ? 
          <>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <h4 className='d-inline-block text-muted'>Tech : {project.tech.map(tech => <span>{tech} | </span>)}</h4>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
              <img src={`${project.img}`} className='w-75 rounded-circle'/>
          </div>
          </> :
          <>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
              <img src={`${project.img}`} className='w-75 rounded-circle'/>
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <h4 className='d-inline-block text-muted'>Tech : {project.tech.map(tech => <span>{tech} | </span>)}</h4>
          </div>
          </>
        }
    </div>
  )
}

export default Project