import { NavLink } from "react-router-dom"


export default function(props){
    console.log(props);


     //делаем  первую хлебную крошку Tutors режим текста
    let tutorsLink = "Tutors"  
    if( props.tutor) {
        //делаем  первую хлебную крошку Tutors режим навлинк
        tutorsLink = <NavLink to="/tutors">Tutors</NavLink> 
    }
   
  //делаем вторую
    let tutorLink = ""
    if(props.tutor) {
        tutorLink = " / " + props.tutor.name
    }

    //делаем вторую
    if(props.course) {
        tutorLink = <> / <NavLink to={`/tutors/${props.tutor.id}`}>{props.tutor.name}</NavLink></>
        // tutorLink = `"/" ${<NavLink to="/tutors">{props.tutor.name}</NavLink>}` 
    }

    //делаем третью
    let courseLink = ""
    if(props.course) {
        courseLink = <> / {props.course.name}</>
    }


    if(props.isTrial) {
        courseLink = <> / <NavLink to={`/tutors/${props.tutor.id}/courses/${props.course.id}`}>{props.course.name}</NavLink></>
        
    }

    //делаем четвертую
    let trialLink = ""
    if(props.isTrial) {
        trialLink = <> / Trial </>
    }



    // if(props.tutor) = {Course}

    // if (props.tutor){
    //     tutorsLink = <NavLink to={`${props.tutor}`}></NavLink>
    // }
    return <div>

        <div> / {tutorsLink}{tutorLink}{courseLink}{trialLink}</div>


    </div>
}