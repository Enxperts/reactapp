import React from 'react';
import ImageContext from './ImageContext';

export default class ImageContextProvider extends React.Component {
    state = {
     images: []
    }

    addImage = (image) =>{
        this.setState({images: [...this.state.images, image]}) 
    }
    // getProgram = (programId) =>{
    //     return this.state.images.find((program)=> program.id == programId)
    // }

    // getPrograms = (programIds) =>{
    //     return this.state.images.filter((program)=> programIds.includes(program.id))
    // }

    imageDelete = (index) => {
        this.setState({images: [...this.state.images.slice(0,index), ...this.state.images.slice(index + 1) ]})
    } 



    render() {
        console.log(this.props.children);
        return(
        <ImageContext.Provider value = {{
            addImage: this.addImage,
            imageDelete: this.imageDelete,
            // getPrograms: this.getPrograms,
            images: this.state.images
        }}>
            {this.props.children}
        </ImageContext.Provider>);
    }


}
