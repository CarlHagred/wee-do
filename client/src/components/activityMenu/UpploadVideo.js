import React, {useState} from 'react'; 
import '../styled/SaveVideo.css'; //Tillfälligt css. Ska stylas med styled component sen
import axios from 'axios'; 

const UpploadVideo = () => {
    const [form, setForm] = useState({
        title: "", 
        description: "", 
        file: null
    })
    
    /* const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); */
    

    function handleChange(event){
        const inputValue = event.target.name === "file" ? event.target.files[0] : event.target.value; 
        setForm({
            ...form, 
            [event.target.name]: inputValue
        })
    }
    function handleSubmit(event){
        
        event.preventDefault(); 
        const videoData = new FormData(); 
        videoData.enctype = 'multipart/form-data'; 

        videoData.append("videoFile", form.file); 
        videoData.append("title", form.title); 
        videoData.append("description", form.description); 

        axios.post("http://localhost:8000/upload", videoData)
        
        .then(response => {
            console.log(response.data); 
        })
    }
    return (
        <div className="upload-save-vid">
            <h1>Ladda upp en ny övning</h1>
            <form id="foo" onSubmit={handleSubmit}>
                <div className="upload-video">
                    <input onChange={handleChange} type="text" name="title" id="title"autoComplete="off" placeholder="Övningstitel" />
                    <textarea onChange={handleChange} type="text" name="description" id="description" autoComplete="off" placeholder="Beskrivning" />
                    <input onChange={handleChange} accept="video/mp4" type="file" name="file" id ="filechoose" placeholder="Add Video File" />                
                    <button type="submit" id="upload-new-video">Ladda upp ny övning</button>
                </div>
            </form>
        </div>
    );
}
export default UpploadVideo;