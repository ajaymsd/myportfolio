import React from 'react'

import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-none p-3 ">
  <div class="container ">
    <a class="navbar-brand" href="#" style={{
      marginTop:"-4px",
            fontSize:"20px",
            fontWeight:"bolder"
        }}>Ajay's Portfolio</a>
    <button class="navbar-toggler" id="ham" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navcen" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mt-4 mb-lg-0">
        <li class="nav-item" style={{
            fontSize:"20px"
        }}>
          <Link to="/" className="nav-link " aria-current="page">Home</Link>
        </li>
        <li class="nav-item" style={{
            fontSize:"20px"
        }}>
          <Link to="/about" class="nav-link" >About</Link>
        </li>
        <li class="nav-item" style={{
            fontSize:"20px"
        }}>
          <Link to="/projects" class="nav-link" >Projects</Link>
        </li>
        <li class="nav-item" style={{
            fontSize:"20px"
        }}>
          <Link to="/skills" class="nav-link" >Skills</Link>
        </li>
        <li class="nav-item" style={{
            fontSize:"20px"
        }}>
          <Link to ="/contact" class="nav-link" >Contact</Link>
        </li>
      </ul>
      <span class="navbar-text">
      <a class="btn btn-md btn-success text-light" href="https://api.whatsapp.com/send?phone=6384945201">Hire Me</a>
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header