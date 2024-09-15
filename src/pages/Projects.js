import React from 'react'
import devimh from '../images/aboutimg2.jpg'
import weather from '../images/weather.png'
import quote from '../images/quote.png'
import recipe from '../images/recipe.png'
import country from '../images/country.png'
import blog from '../images/blog.png'
import job from '../images/job.png'
import att from '../images/att.jpg'
import crud from '../images/crud.png'
function Projects() {
  return (
    <>
    <div className='projects'>
      <h1 className='text-center mt-5'>My Projects</h1>
      <div className='project-container container mt-5' style={{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        rowGap:"60px"
      }}>

        <div className='project'>
          <img src={blog} alt="" className='img img-responsive'></img>
          <br></br><br></br>
          <h6>Blog App Using MERN</h6>
          <div className='d-flex'>
           <a href="" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={job} alt=""></img>
        <br></br><br></br>
          <h6>Online Job Portal Using CodeIgniter and Sql</h6>
          <div className='d-flex'>
           <a href="" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={att} alt=""></img>
        <br></br><br></br>
          <h6>Automatic Attendance Registration System Using Python</h6>
          <div className='d-flex'>
           <a href="" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={recipe} alt=""></img>
        <br></br><br></br>
          <h6>Recipe App Using React and Meal DB API</h6>
          <div className='d-flex'>
           <a href="https://github.com/ajaymsd/RecipeApp_With_React" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="https://recipeapp-react-am.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={crud} alt=""></img>
        <br></br><br></br>
          <h6>CRUD Application using Node,express,SQL,React</h6>
          <div className='d-flex'>
           <a href="" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={weather} alt=""></img>
        <br></br><br></br>
          <h6>Weather App using JavaScript</h6>
          <div className='d-flex'>
           <a href="https://github.com/ajaymsd/Weather-App" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="https://weatherapp-am.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={quote} alt=""></img>
        <br></br><br></br>
          <h6>Quote GeneratorApp using JavaScript</h6>
          <div className='d-flex'>
           <a href="https://github.com/ajaymsd/Quotegenerator-App" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="https://quotegenerator-am.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

        <div className='project'>
        <img src={country} alt=""></img>
        <br></br><br></br>
          <h6>Country Guide App using JavaScript</h6>
          <div className='d-flex'>
           <a href="https://github.com/ajaymsd/Countryguide_App" className="btn btn-md btn-primary mx-1" target='_blank' rel="noreferrer">Github</a>
           <a className="btn btn-md btn-warning" href="https://countryguide-am.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Projects