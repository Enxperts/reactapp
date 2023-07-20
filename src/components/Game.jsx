import "./Game.css"
import { useEffect, useState } from "react";



export default function(){

    const [state, setState] = useState({
        userQuestions: [],


    })
   
   
    const questions = [
        {
            id: 1,
            text: "How old is the Universe?",
            answers: [
                {text: "1 bln years", isCorrect: true, coords:[350,60]},
                {text: "1 hundred years", isCorrect: false, coords:[400,100]},
                {text: "1 century ", isCorrect: false, coords:[350,140]}
            ],
            coords:[200,100]
        },

        {
            id: 2,
            text: "How far is the planet Earth from Sun?",
            answers: [
                {text: "2nd from Sun", isCorrect: true, coords:[300,260]},
                {text: "3rd from Sun", isCorrect: false, coords:[400,300]},
                {text: "5th from Sun ", isCorrect: false, coords:[300,340]}
            ],
            coords:[100,300]
        },

        {
            id: 3,
            text: "When was the first video game invented?",
            answers: [
                {text: "at 1900", isCorrect: true, coords:[700,140]},
                {text: "at 1930", isCorrect: false, coords:[780,200]},
                {text: "at 2000", isCorrect: false, coords:[700,240]}
            ],
            coords:[400,200]
        },


        {
            id: 4,
            text: "Who stole Christmass holiday?",
            answers: [
                {text: "Hulk", isCorrect: true, coords:[700,360]},
                {text: "Gamora", isCorrect: false, coords:[740,400]},
                {text: "Grinch", isCorrect: false, coords:[700,440]}
            ],
            coords:[300,420]
        },


    ]

    //при клике на ответ
    const onAnswerClick = (question, answer)=> {
        // если ответ правильный
        if(answer.isCorrect) {
            setState({
                ...state,
                userQuestions: [
                    ...state.userQuestions,
                    {id: question.id, isCorrect: true,}

                ],
            })
            //1)скрыть неправильные ответы , 
            //2)переместить объект
            //находить
            //активировать текущий , деактивировать предыдущий
            //находить следующий активный
        }
    }
    // открытый скрытый  - активный неактивный

    const getUserQuestion = (questionId) =>{
        return state.userQuestions.find(uq=>uq.id === questionId) || {}
    }


    

    return <div className="game">

        {questions.map(q=><div>
            <div 
                className={`question ${getUserQuestion(q.id).isCorrect ? "question--visible" : ""}`} 
                style={{
                    top: `${q.coords[1]}px`, 
                    left:`${q.coords[0]}px`
                }}
                
            >{q.text}

            </div>
            {q.answers.map(a=> <div 
                className={`answer ${getUserQuestion(q.id).isCorrect ? "answer--visible" : ""}`}
                style={{top: `${a.coords[1]}px`, left:`${a.coords[0]}px`}} 
                onClick={()=> onAnswerClick(q, a)}
            >{a.text}</div>)}




        </div>)}

       


    </div>
}

