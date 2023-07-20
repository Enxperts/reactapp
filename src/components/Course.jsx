import { useParams, NavLink, Route, useLocation } from "react-router-dom"
import {useContext} from "react"
import CourseContext from "../context/CourseContext";
import TutorContext from "../context/TutorContext";
import Trial from "./Trial";
import Tutorsbreadcrumbs from "./Tutorsbreadcrumbs";
import "./Course.css"
export default function (){

   

    const params = useParams();
    console.log(params);

    const {getCourse} = useContext(CourseContext);
    const course = getCourse(params.courseId)
    console.log(params);
    console.log(course);

    const {getTutor} = useContext(TutorContext);
    const tutor = getTutor(params.tutorId)


  console.log(course);

  const location = useLocation()
  console.log(location);

  const isTrial  = location.pathname.includes("/trial")
  console.log(isTrial);


    return <div>
      <br />
       <Tutorsbreadcrumbs tutor={tutor} course={course} isTrial={isTrial}/>
     <br />

     <div className="course-card">
            <div className="course-card___colums">
                <div className="course-card___avatar">
                    <img className="course-card___image" src={tutor.photo} alt="tutor"/>
                
            
                
                </div>
                <div className="course-card___about" ><div>
                  {course.name}
                  <div>
                 <NavLink to={`/tutors/${tutor.id}/courses/${course.id}/trial`}>Trial</NavLink>
                </div>
                </div></div>
            </div>

            <div className="course-card___colums course-card___features">
                <div > <span className="icon icon___group"></span> group lessons</div>
                <div > <span className="icon icon___levels"></span>all levels</div>
                <div > <span className="icon icon___week"></span>1 time a week</div>
            </div>
            
            <div className="course-card___gallery">
              <div className="course-card___level">Levels</div>
              <div className="course-card___description">   
                <div>{course.description}</div>
              </div>
            </div>



        
              <div className="course-card___particularities">Particularities</div>
              <div className="course-card___goal">Goal</div>
              {/* <div className="course-card___prices">Prices</div>
              <div className="course-card___trial">
                <div>
                 <NavLink to={`/tutors/${tutor.id}/courses/${course.id}/trial`}>Trial</NavLink>
                </div>
              </div> */}
                    
    
       {/* <iframe width="352" height="198" src={course.content} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}


    </div>
    </div>
}
{/* <div>Content:{course.content}</div> */}