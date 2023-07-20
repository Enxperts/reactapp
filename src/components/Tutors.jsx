import { NavLink, Route, useLocation, useParams } from "react-router-dom"
import Elementary from "./Elementary"
import Interview from "./Interview"
import Tutor from "./Tutor"
import {useContext} from "react"
import TutorContext from "../context/TutorContext"
import CourseContext from "../context/CourseContext"
import "./Tutors.css" 
import Tutorbreadcrumbs from "./Tutorsbreadcrumbs"

export default function (){
    const {tutors} = useContext(TutorContext);
    const location = useLocation()
    console.log(location, tutors);

    // const params = useParams();
    // console.log(params.tutorId);


    const {getCourse} = useContext(CourseContext);


    return <div>
        <br />
        
        <Tutorbreadcrumbs/> 
        <br />
        <br />
        <div className="tutors">
            {/* <NavLink to='/courses/anastasia'>Анастасия </NavLink>
            <NavLink to='/courses/leroi'>Лерой</NavLink>
            <NavLink to='/courses/benjamin'>Бенжамин</NavLink>
            <NavLink to='/courses/patricia'>Патрисия</NavLink>
            <NavLink to='/courses/oleg'>Олег</NavLink> */}
            {/* {tutors.map(tutor => <NavLink to={`/tutors/${tutor.id}`}>
                <div className="tutor-item">
                    <div className="tutor-item__name">{tutor.name}</div>
                    Boxes of the tutors
                    <NavLink to={'/randomizer'} className="tutor-item__course"> Programm 1</NavLink>
                </div>

            </NavLink>) }  */}
            {tutors.map(tutor => <div className="tutor-item">
                <NavLink className="tutor-item__link" to={`/tutors/${tutor.id}`}>
                    <div className="tutor-item__tutorcard">
                        <img className="tutor-item__photo" src={tutor.photo} alt="tutor"/>
                        <span className="tutor-item__name">{tutor.name}</span>
                    </div>
                </NavLink>

                <div>
                    {tutor.courseIds
                    .map( courseId => getCourse(courseId) )
                    .map( course =>  <div><NavLink to={`/tutors/${tutor.id}/courses/${course.id}`}>
                        {course.name}</NavLink></div> )
                    } 



                </div>
               
            </div>  )} 



         </div>
    
        {/* <Route path='/tutors/:tutorId/' component={Tutor}/> */}

    </div>

} 