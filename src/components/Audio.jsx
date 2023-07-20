import "./Audio.css"
import { useState } from "react";

function Audio1 ({word}){
    const axios = require('axios');

    const audioPlayer = new Audio();
    const [className, setClassname] = useState("audio--loading audio")


    const getWordAudio = async () => {
        const apiKey = 'e5bcc563-1df8-4c2a-a49a-6efdd6b7f50d';
        const endpoint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`;

        try {
            // const response = await axios.get(endpoint);
            let response = await fetch(endpoint)
            response = await response.json()
            // console.log(response);

            const audioEntries = response[0].hwi.prs;


            // console.log(audioEntries);
            if (audioEntries && audioEntries.length > 0) {
                const audioUrl = audioEntries[0].sound.audio;
                // Use the audio URL as needed
                // console.log('Audio URL:', audioUrl);
                audioPlayer.src=`https://media.merriam-webster.com/audio/prons/en/us/mp3/${word[0]}/${audioUrl}.mp3`
                setClassname("audio");
            } else {
                console.log('No audio available for the word.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    // const audioPlayer = new Audio("https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3");

    // const playAudio = () => {
    //     const audioPlayer = new Audio("https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3");
    //     audioPlayer.onloadedmetadata = ()=> {
    //         // audioPlayer.play();
    //         console.log(1);
    //     }
    // audioPlayer.controls = true
    // document.body.append(audioPlayer);

    //     console.log(audioPlayer);
    //     // audioPlayer.play();
        
    //   };

    // playAudio();

    getWordAudio();

    const onclick = () => {
        audioPlayer.play();
    }


    // return <button className={className}  onClick={onclick}>▶️</button> 

      return (
    <button className={className} onClick={onclick}>
      <span className="play-icon">▶️</span>
    </button>
  );
}  

export default Audio1

// Usage
// getWordAudio('dog');