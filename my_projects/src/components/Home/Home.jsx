import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home container-fluid bg-dark'>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="main-content row">
              <div className="col-6 intro text-white d-flex flex-column align-items-center justify-content-center gap-2">
                <p className='fs-4'>Welcome to my projects</p>
                <p className='fs-4'>Click here to view projects</p>
                <Link to='/projects' className='btn btn-primary rounded-4'>View Projects</Link>
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner rounded-circle border-none outline-none">
                    <div class="carousel-item active">
                      <img src="/todo_app.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item ">
                      <img src="/shopping_app.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="/currency_converter.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="/password_generator.jpg" class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home