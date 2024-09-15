import React from 'react'
import './about.css';
import devimh from '../images/aboutimg.jpg'
function About() {
  return (
    <>
    <div className='about mt-5'>
    <h1 className='text-center'>About Me</h1>
     <div className='about-container container mt-5'>
     
     <div className='row justify-content-center '>
      <div className='col-lg-5 col-md-12 col-sm-12'>
        <img src={devimh} alt='no image' />
      </div>
     <div className="col-lg-7 col-md-12 col-sm-12">
      <p style={{
        lineHeight:"40px",
      }}>Iam a 2023 graduate from Subbalakshmi Lakshmipathy College of Science, Madurai, where iam studied BSc Computer Science and currently seeking for job opportunities in the field of software development and web development as a fresher, with the 5 months of Internship Experience by working on 4 live projects.Eager to apply my skills and knowledge to contribute to the success of a company in these roles.</p>
     </div>
     </div>
     </div>
     <div className='container  educon'>
     <h1 className='mt-5 text-center'>Education and Experience</h1>
<ul className='mt-5'>
    <li style={{fontWeight:"bold","--accent-color":"#41516C"}}>
        <div class="date">2017-2018</div>
        <div class="title">SSLC (10th Grade)</div>
        <div class="descr"><p>TVS Higher Secondary School</p><p>Passed With 82% </p></div> 
    </li>
    <li style={{"--accent-color":"#FBCA3E"}}>
        <div class="date">2019-2020</div>
        <div class="title">HSC (12th Grade)</div>
        <div class="descr"><p>TVS Higher Secondary School</p><p>Passed With 71% </p></div> 
    </li>
    <li style={{"--accent-color":"#E24A68"}}>
        <div class="date">2020-2023</div>
        <div class="title">Bsc.Computer Science</div>
        <div class="descr"><p>Subbalakshmi Lakshmipathy College Of Science</p><p> CGPA : 8.9</p></div>
    </li>
    <li style={{"--accent-color":"#1B5F8C"}}>
    <div class="date">JAN 2023-JUN 2023</div>
        <div class="title">Full Stack Web Developer Intern</div>
        <div class="descr"><p>AstroWebSolution ,Madurai</p></div>
    </li>
    <li style={{"--accent-color":"#E24A68"}}>
    <div class="date">JUN 2023-DEC 2023</div>
        <div class="title">Junior Software Engineer Trainee</div>
        <div class="descr"><p>CartRabbit ,Coimbatore</p></div>
    </li>
    <li style={{"--accent-color":"#FBCA3E"}}>
    <div class="date">DEC 2023 - PRESENT</div>
        <div class="title">Junior Software Engineer</div>
        <div class="descr"><p>CartRabbit ,Coimbatore</p></div>
    </li>
</ul>


     </div>
    </div>
    </>
  )
}

export default About