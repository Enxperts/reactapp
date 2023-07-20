import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TutorContextProvider from './context/TutorContextProvider';
import CourseContextProvider from './context/CourseContextProvider';
import ImageContextProvider from './context/ImageContextProvider';


ReactDOM.render(
  <BrowserRouter>
    <CourseContextProvider>
      <TutorContextProvider>
        <ImageContextProvider>
          <App />
        </ImageContextProvider>
      </TutorContextProvider>
    </CourseContextProvider>
  </BrowserRouter>
    ,
    document.getElementById('root')
    );

    