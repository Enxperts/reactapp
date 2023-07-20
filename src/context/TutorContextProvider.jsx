import React from 'react';
import TutorContext from './TutorContext';
import tutors from './tutors.json'


export default class TutorContextProvider extends React.Component {
    state = {
        tutors
    }
    getTutor = (tutorId) =>{
        return this.state.tutors.find((tutor)=> tutor.id == tutorId)
    }


    render() {
        console.log(this.props.children);
        return(
        <TutorContext.Provider value = {{
            getTutor: this.getTutor,
            tutors: this.state.tutors
        }}>
            {this.props.children}
        </TutorContext.Provider>);
    }


}
