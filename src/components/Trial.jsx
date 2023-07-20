import { useState, Route, useContext } from "react";
import { useParams , useLocation  } from "react-router-dom";

import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import Tutorsbreadcrumbs from "./Tutorsbreadcrumbs";


import CourseContext from "../context/CourseContext";
import TutorContext from "../context/TutorContext";

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import { send } from 'emailjs-com';
import "./Trial.css"


export default function Trial(){

    console.log(DatePicker);
    const params = useParams();

    const {getCourse} = useContext(CourseContext);
    const course = getCourse(params.courseId)

    const {getTutor} = useContext(TutorContext);
    const tutor = getTutor(params.tutorId)




    const [state, setState] = useState({
        tutorId: params.tutorId,
        courseId: params.courseId,
        name:"",
        email:"",
        telegram:"",
        date:""
    });
    

    const onSumbitClick = () =>{
        let trialMonth = startDate.getMonth() + 1  
        if (trialMonth <= 9 ){
            trialMonth = "0" + trialMonth 
        } 

        const data = {
            teacherName: tutor.name,
            courseName: course.name,
            from_name: state.name,
            reply_to: state.email,
            studentTelegram: state.telegram,
            date: `${startDate.getDate()}.${trialMonth}.${startDate.getFullYear()}`

        }
        console.log(data);


        send(
            'service_tvtmis4',
            'template_vn01ewu',
            //   {
            //   date:"",
            //   time:"",
            //   phone:"",
            //   from_name:"",
            //   reply_to:"",
            //   teacherName:"",
            //   submitted: "",
            //   },
            data,
            'euo4EtH4S0XC-tmJc'
          )
            .then(() => {
              setState({...state, submitted:true});
              
            })
      
            .catch(() => {
              setState({...state, submitted:false});
              
            });

    }



    const [startDate, setStartDate] = useState(new Date());

    console.log(tutor.excludeDates);

    const excludeDate = tutor.excludeDates.map((item)=> {
        const params = item.split(".")
        params.reverse();
        params[1] = params[1] - 1;
        // console.log(item, params, new Date(...params));

        return new Date(...params)
    } )
    console.log(excludeDate);

    return <div className="inputForm">   
    <br />     
     <Tutorsbreadcrumbs tutor={tutor} course={course} isTrial={true}/>
    <br />

        <div className="trial">
            <div className="trial___colums">
            
            
            <ul className="trial___form">

            <li>
                Course 
                <select disabled name="" id="">
                    <option value={course.id}>{course.name}</option>
                </select>
            </li>

            <li>
                Name<input name="name" 
                type="text"  
                onChange={(e)=>setState({...state, name: e.target.value}) }
                value={state.name} 
                />
            </li>

            <li>  
                Email<input      
                type="email"  
                onChange={(e)=>setState({...state, email: e.target.value}) }
                value={state.email}  
                />
            </li>

            <li>  
                Telegram<input  
                type="text"  
                onChange={(e)=>setState({...state, telegram: e.target.value}) }
                value={state.telegram} 
                />
            </li>

            <li>  
                {/* Date<input  
                type="date"  
                onChange={(e)=>setState({...state, date: e.target.value}) }
                value={state.date} 
                /> */}

   
                    Date<DatePicker 
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    excludeDates={excludeDate}
                    placeholderText="Select a date other than today or yesterday"
                    dateFormat="d MMMM yyyy "
                    />
       
                
            </li>

            <li>
                <button 
                onClick={onSumbitClick}

                >Submit</button>
            </li>
        </ul>
    
        {state.submitted && <div>Your enquiry has been sent successfully! 👌</div>}
    
    </div>
    </div>
    </div>

}


//<label htmlFor="name">Name</label>//