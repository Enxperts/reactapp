import { useState, useEffect } from "react";

export default function(){
    const [value, setValue] = useState("");
    const [names, setNames] = useState([]);
    const [randomName, setRandomName] = useState("");
    
    useEffect(()=> {
        setNames(window.location.hash.slice(1).split(',').filter((item)=> item !== ""))
    } , [])


    const onAddClick = (n)=> {
        const valueSplit = value.split(',').map((w)=> w.trim())
        const randomNames = [...names, ...valueSplit]
        setNames(randomNames)
        window.location.hash = randomNames.join(',')
        setValue("") 
        }

    

    return <div>
    <br />

        <input  
        type="text"  
        onInput={(e)=>setValue(e.target.value) }
        value={value} 
        />

        <button onClick={ onAddClick }>Add</button>
        <button
        onClick={(e)=> {
            //pick random name, delete that name, display that name
            
            let i = Math.floor(Math.random() * names.length)

            console.log(names[i]);
            setRandomName(names[i])
            const activeName = [...names.slice(0, i), ...names.slice(i + 1),]
            setNames(activeName)
            window.location.hash = activeName.join(',')

            }}
            >Randomize</button>


        <ul>{names.map((i)=> <li > {i} </li>)}</ul>
        <div>{randomName}</div>

    </div>





}