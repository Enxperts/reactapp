import { useEffect, useState } from "react";
import "./Images.css"
import ImageContext from '../context/ImageContext';
import { useContext } from "react";
import Audio from "./Audio";


export default function(){
    
    const [value, setValue] = useState("")
    const [imagesFounded, setImages] = useState([])
    const [imagesSelected, setImagesSelected] = useState([])
    const [isWordVisiable, setIsWordVisiable] = useState(false)
    
    const [searchValue, setSearchValue] = useState("")
    
    console.log(imagesFounded);
    
    
    const {images, addImage, imageDelete} = useContext(ImageContext);
    

    function imagesList(){
        return fetch (`https://api.unsplash.com/search/photos/?client_id=H965350MeHcDmiwVl8Jove4My6JdheMYG5KkXccEfKE&query=${value}&per_page=12`) 
        .then(response => response.json())

    } 
    
    const onSearchClick = () =>{

        // useEffect(()=> {
            // searchValue = value
            setSearchValue(value);
            imagesList()
            .then(response => {
                console.log(response);
                setImages(response.results);
            })
        // },[])

    }

    const onFoundedImageClick = (imageFounded)=> {
        addImage({
            text: searchValue,
            url: imageFounded.urls.regular
        });
        console.log(images);

    }

    const onSelectedImageClick = (index) =>{
        imageDelete(index)
    }

   function onInput (e){
    setValue(e.target.value)
   }

   function onKeyPress (e){
    if (e.key === "Enter"){
        onSearchClick()
    }
   }

    let selectedImageClass = "images__selected"
    if (images.length > 4){
        selectedImageClass = "images__selected images__selected--scroll"
    } 


   console.log(images);
 
    return <div>
        {/* Images page */}

        <br />
       
        
        <input className="inputSearchWord" type={isWordVisiable ? "text" : "password"}  onKeyPress={onKeyPress} onInput={onInput}/>
        <button className="btnSearchWord" onClick={onSearchClick}>Search</button>
        <label className="tickShowWord"><input type="checkbox" value={isWordVisiable} onInput= {(e)=>{setIsWordVisiable(!isWordVisiable)}}/>Show word</label>
     
        


        <div className="images">
            <div className="images__founded"> 
                {imagesFounded.map((imageFounded)=>
                    <div 
                    style={{backgroundImage: `url(${imageFounded.urls.thumb})`}} 
                    className="image__wrapper"
                    onClick={()=>onFoundedImageClick(imageFounded)}
                    >


                        {/* <img className="image__img" src= {image.urls.small_s3}/> */}
                    </div>
                )} 
            </div>
            <div className={selectedImageClass}>
                {images.map((image, index)=>
                <div
                key={image}
                className="images__selected-both"
                >   
                    <div className="images__word image__wrapper">
                        <div className="images__word-position">{image.text} </div>
                        <div><Audio word={image.text}></Audio></div>
                    </div>
                    
                    <div 
                    style={{backgroundImage: `url(${image.url})`}} 
                    className="image__wrapper"
                    onClick={()=>onSelectedImageClick(index)}
                    >
                    </div>

                 
                </div> )}

            </div>
        </div>

    </div>
}
