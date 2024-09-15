import React from 'react'
import {  AiFillHtml5 } from "react-icons/ai"
import {DiCss3,DiJavascript,DiReact,DiMongodb,DiNodejs,DiCodeigniter,DiJava, DiMysql} from "react-icons/di";
import {SiExpress,SiPostman} from "react-icons/si";
import {FaBootstrap} from "react-icons/fa"

function Skills() {
  return (
    <>
  <div className='skills' >
    <h1 className='text-center mt-5'>My Technical Skills</h1>
    <div className='skills-container mt-5 flex-md-wrap container skcon'>
        <div className='d-flex justify-content-center'>
            <AiFillHtml5 className='ic'></AiFillHtml5>
            <DiCss3 className='ic'></DiCss3>
            <DiJavascript className='ic'></DiJavascript>
            <FaBootstrap  className='ic'></FaBootstrap>
           
          </div>
          <div className='d-flex justify-content-center'>
           <DiReact className='ic'></DiReact>
           <DiMongodb className='ic'></DiMongodb>
           <DiNodejs className='ic'></DiNodejs>
           <SiExpress className='ic'></SiExpress>
          </div>
          <div className='d-flex justify-content-center'>
           <DiMysql className='ic'></DiMysql>
           <DiCodeigniter className='ic'></DiCodeigniter>
           <DiJava className='ic'></DiJava>
           <SiPostman className='ic'></SiPostman>
          </div>
        </div>
        <div className='certifications container'>
           <h1 className='text-center mt-5'>
            Certifications
           </h1>
           <div className='certification-container mt-5 w-100'>
            <div className='certification-box' style={{
               
               
               
                padding:"20px",
                rowGap:"30px"
            }}>
                <div className='certification' style={{
                    padding:"29px",
                    background:"lightgray"
                }}>
                    <h4>Microsoft Technology Asscociate - HTML5 Fundamentals</h4>
                    <p>2021</p>
                    <a className='btn btn-success btn-md' href='https://drive.google.com/file/d/1gzu7Zd8HeJ6wbIHWaET9gC7oZmamJEfI/view?usp=sharing' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>
                <div className='certification ' style={{
                     padding:"29px",
                    
                }}>
                    <h4>Microsoft Technology Asscociate - Security Fundamentals</h4>
                    <p>2021</p>
                    <a className='btn btn-success btn-md' href='https://drive.google.com/file/d/1gwbeSyB2fSZMsXCuXUuZGWy_yfvHCvh7/view?usp=sharing' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>

                <div className='certification' style={{
                    padding:"29px",
                    background:"lightgray"
                }}>
                    <h4>Microsoft Technology Asscociate - Python Fundamentals</h4>
                    <p>2022</p>
                    <a className='btn btn-success btn-md' href='https://drive.google.com/file/d/1h4i5Awk87n8frf3opM6nTI3kKB0RtGjU/view?usp=sharing' target='_blank' rel="noreferrer">Credential URL</a>
                </div>

                <br></br>
                <div className='certification' style={{
                     padding:"29px",
                    
                }}>
                    <h4>Full Stack Developer Certification from Shiksha Simple Learn (ISO CERTIFIED institute)</h4>
                    <p>2022</p>
                    <a className='btn btn-success btn-md' href='https://drive.google.com/file/d/1gvFobDNQAX-uQzqcjp2fbBrmq9hZkssp/view?usp=share_link' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>

                <div className='certification' style={{
                    padding:"29px",
                    background:"lightgray"
                }}>
                    <h4>Mongo DB University Certification</h4>
                    <p>2023</p>
                    <a className='btn btn-success btn-md' href='https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/9b2fc8a5-8778-4a43-98a2-7c5e193e9825-ajay-mathesh-0c673040-16ea-4fd3-a59b-499674bd9800-certificate.pdf' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>
                <div className='certification' style={{
                    padding:"29px",
                    
                }}>
                    <h4>Git and Github Advanced Certification from Udemy</h4>
                    <p>2023</p>
                    <a className='btn btn-success btn-md' href='https://www.udemy.com/certificate/UC-5fb08038-bbae-4fd8-be6d-7e7daa7b02c5/' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>
                <div className='certification' style={{
                    padding:"29px",
                    background:"lightgray"
                }}>
                    <h4>JavaScript Certification from Udemy</h4>
                    <p>2022</p>
                    <a className='btn btn-success btn-md' href='https://www.udemy.com/certificate/UC-e2a71b9d-1854-47c9-9347-45d1be04fd44/' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                <br></br>
                <div className='certification' style={{
                    padding:"29px",
                   
                }}>
                    <h4>Java Programming Certificate from Great Learning</h4>
                    <p>2021</p>
                    <a className='btn btn-success btn-md' href='https://olympus.mygreatlearning.com/courses/12385/certificate' target='_blank' rel="noreferrer">Credential URL</a>
                </div>
                
              
                
            </div>
           </div>
        </div>
    </div>
  
    </>
  )
}

export default Skills