import { useParams, Route } from "react-router-dom"
import TutorContext from "../context/TutorContext";
import {useContext} from "react"
import { NavLink } from "react-router-dom";
import CourseContext from "../context/CourseContext";
import "./tutor.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Course from "./Course";
import Tutorsbreadcrumbs from "./Tutorsbreadcrumbs";



export default function(){
    const {tutors, getTutor} = useContext(TutorContext);
    const {courses, getCourses} = useContext(CourseContext);
    // console.log(tutors);

    const params = useParams();
    // console.log(params);
    const tutor = getTutor(params.tutorId)
    const tutorCourses = getCourses(tutor.courseIds)
    // const course = getcourse(params.courseId);
    console.log(tutorCourses);
    console.log(courses);
    console.log(tutor.courseIds);


    return <div>
                <br />
        <Tutorsbreadcrumbs tutor={tutor}/>
        <br />
       
        
        
        <div className="tutor-card">
            <div className="tutor-card___colums">
                <div className="tutor-card___avatar">
                    <img className="tutor-card___image" src={tutor.photo} alt="tutor"/>
                
                    {/* <div>{tutor.name}</div> */}
                
                </div>
                <div className="tutor-card___about" >
                    {tutor.about}
                    {tutorCourses.map((course)=>(<div className="">
        
                    <NavLink to= {`/tutors/${tutor.id}/courses/${course.id}`}> { course.name } </NavLink>

                    </div>)
                    )}
                </div>
            </div>

            <div className="tutor-card___colums tutor-card___features">
                <div > <span className="icon icon___group"></span> group lessons</div>
                <div > <span className="icon icon___levels"></span>all levels</div>
                <div > <span className="icon icon___week"></span>1 time a week</div>
            </div>
            
            
            <div className="tutor-card___gallery">
            
                {tutor.slides && <Carousel showThumbs={false} dynamicHeight={false}>
                    {tutor.slides.map((slide) => <div>
                        <div 
                        className="gallery___slide" 
                        style={{backgroundImage: `url(${slide.image})`}}
                        
                        >
                            <div className="gallery___description">{slide.description}</div>
                        </div>
                        
                    </div>)}

                    
                </Carousel>}
            </div>

            {/* <div className="tutor-card___colums">
                <div className="tutor-card___bonus">Bonus</div>
                <div className="tutor-card___courses">
                    
                    
                </div>
             </div> */}
                    
            </div>
            </div>

        
}






