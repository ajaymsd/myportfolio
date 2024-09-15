import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"
import myimg from "../images/Ajay-modified (1).png";
function Home() {
 return (
    <>
     <div className='Home text-center mt-1'>
        <img src={myimg} alt="" className='img img-responsive'/>
        <h1 className='mt-2'>Hello Iam Ajay Mathesh</h1>
        <h3> A Full Stack Web Developer With Extensive Knowledge and Minimal Experience</h3>
        <h4>Expertised In MERN-STACK</h4>
        <p>Connect Me On : </p>
        <div className='d-flex justify-content-center iconbox'>
         <AiFillGithub></AiFillGithub>
         <AiFillLinkedin></AiFillLinkedin>
         <AiFillInstagram></AiFillInstagram>
         <AiFillTwitterSquare></AiFillTwitterSquare>
        
        </div>
        <a href="https://drive.google.com/file/d/112QNRK99qqSDEynT9nMNPiW3WP9iK3z_/view?usp=share_link" Download="Ajay_Mathesh_Resume" className='btn btn-danger btn-md mt-3'>Download CV</a>
     </div>
    </>
  )
}

export default Home