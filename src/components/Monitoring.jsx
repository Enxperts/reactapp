import axios from 'axios';
import "./Monitoring.css"

import { useEffect, useState } from "react";

console.log(2, window.gapi);



const apiKey = '%';
async function searchVideos(query) {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: apiKey,
        part: 'snippet',
        q: query,
        maxResults: 12,
        type: 'video',
      },
    });
    return response;

    const videos = response.data.items;
    console.log(videos);
    // Handle the retrieved videos in your app
  } catch (error) {
    console.error('Error searching videos:', error);
  }
}





export default function(){
    
    const [value, setValue] = useState("")
    const [imagesFounded, setImages] = useState([])
    const [videoSelected, setVideoSelected] = useState({})
    const [isWordVisiable, setIsWordVisiable] = useState(false)
    const [captionQuestions, setCaptionQuestions] = useState([])
    const [loading, setLoading] = useState("")
    const [searchValue, setSearchValue] = useState("")
  

    


 

    


    const gptrequest = async (input) =>{
      try {
        const response = await axios.post("https://api.openai.com/v1/engines/davinci/completions", {
          prompt: input,
          max_tokens: 100,
          temperature: 0.7,
          n: 5, // Get 5 questions
          stop: "\n",
        }, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer %",
          },
        });
        
        const choices = response.data.choices;
        const questions = choices.map(choice => choice.text.trim());
        setCaptionQuestions(questions);
        console.log(questions);
        setLoading("")
      } catch (error) {
        console.error('Error generating questions:', error);
        setLoading('')
      }
    }

    
    const onSearchClick = () =>{

        // useEffect(()=> {
            // searchValue = value
            setSearchValue(value);
            searchVideos(value)
            .then(response => {
                console.log(response);
                setImages(response.data.items);
            })
        // },[])

    }

    const onFoundedImageClick = async (videoFounded)=> {

      setCaptionQuestions([])
      setLoading("loading")
      const responseCaptions = await axios.get(`http://%/${videoFounded.id.videoId}`)
      gptrequest(`Please analyze the text subtitles of the video and make 5 questions to the content: ${responseCaptions.data.data}`);

      console.log(responseCaptions);
      setVideoSelected({
        videoFounded
      });

      console.log(videoFounded.id.videoId);

    }

    const onSelectedImageClick = (index) =>{
        // imageDelete(index)
        }   

   function onInput (e){
    setValue(e.target.value)
   }

   function onKeyPress (e){
    if (e.key === "Enter"){
        onSearchClick()
    }
   }

    return <div className='videos__page'>
        {/* Images page */}

        <br />
       
        
        <input className="inputSearchWord" type={isWordVisiable ? "text" : "password"}  onKeyPress={onKeyPress} onInput={onInput}/>
        <button className="btnSearchWord" onClick={onSearchClick}>Search</button>
        <label className="tickShowWord"><input type="checkbox" value={isWordVisiable} onInput= {(e)=>{setIsWordVisiable(!isWordVisiable)}}/>Show word</label>
        {/* <button className="gptRequest" onClick={gptrequest}>Try GPT</button> */}






        <div className="videos">
            <div className="videos__founded"> 
                {imagesFounded.map((videoFounded)=>
                    <div 
                    style={{backgroundImage: `url(${videoFounded.snippet.thumbnails.high.url})`}} 
                    className="video__wrapper"
                    onClick={()=>onFoundedImageClick(videoFounded)}
                    >


              
                    </div>
                )} 
            </div>
            
            <div className='video__selected'>
              <div className='video__displayed'>
              {videoSelected.videoFounded && <iframe width="352" height="198" src={`https://www.youtube.com/embed/${videoSelected.videoFounded.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
              </div>
              <div className={loading + " gptquestions__displayed"} >

                {captionQuestions.map((question, index) => (
                  <div key={index}>{question}</div>

                ))}
              </div>
            </div>




            {/* <div className="images__selected">
                {videoSelected.map((image, index)=>
                <div
                key={image}
                className="images__selected-both"
                >   
                    <div className="images__word image__wrapper">
                        <div className="images__word-position">{image.text}</div>
                    </div>
                    
                    <div 
                    style={{backgroundImage: `url(${image.url})`}} 
                    className="image__wrapper"
                    onClick={()=>onSelectedImageClick(index)}
                    >

                   <iframe width="352" height="198" src={`https://www.youtube.com/embed/${image.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>

                 
                </div> )}

            </div> */}





        </div>

    </div>
}










// export default function () {
//   searchVideos('cats');
//   return (
//     <div>
//       Monitoring page
//     </div>
//   );
// }
