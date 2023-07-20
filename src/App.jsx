import {NavLink, Route, Switch} from 'react-router-dom'
import './App.css';
import Courses from './components/Tutors';
import Images from './components/Images';
import Randomizer from './components/Randomizer';
import Monitoring from './components/Monitoring';
import Tutor from './components/Tutor';
import Course from './components/Course';
import Trial from './components/Trial';
import Game from './components/Game';





function App() {
  return (
    <div className='app content'>
      <div className='nav'>
        <NavLink className="nav__item" to='/tutors'> Tutors </NavLink>
        <NavLink className="nav__item" to='/images'> Images </NavLink>
        <NavLink className="nav__item" to='/randomizer'> Randomizer </NavLink>
        <NavLink className="nav__item" to='/monitoring'> Monitoring </NavLink>
        <NavLink className="nav__item" to='/game'> Game </NavLink>       
      </div>
      <Switch>
        <Route path='/tutors/:tutorId/courses/:courseId/trial' component={Trial} /> 
        <Route path='/tutors/:tutorId/courses/:courseId' component={Course}/>
        <Route path='/tutors/:tutorId/' component={Tutor}/>
        <Route path='/tutors' component={Courses}/>
        <Route path='/images' component={Images}/>
        <Route path='/randomizer' component={Randomizer}/>
        <Route path='/monitoring' component={Monitoring}/>
        <Route path='/game' component={Game}/>
      </Switch>


    </div>
  );
}

export default App;
