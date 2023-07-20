import React from 'react';
import CourseContext from './CourseContext';
import courses from './courses.json'


export default class CourseContextProvider extends React.Component {
    state = {
     courses
    }
    getCourse = (courseId) =>{
        return this.state.courses.find((course)=> course.id == courseId)
    }

    getCourses = (courseIds) =>{
        return this.state.courses.filter((course)=> courseIds.includes(course.id))
    }

    render() {
        console.log(this.props.children);
        return(
        <CourseContext.Provider value = {{
            getCourse: this.getCourse,
            getCourses: this.getCourses,
            courses: this.state.courses
        }}>
            {this.props.children}
        </CourseContext.Provider>);
    }


}
