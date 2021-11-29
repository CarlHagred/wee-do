import React, { useState } from "react";
import styled from "styled-components";

import { postVideo } from "../../api/index.js";

import UserInput from "../common/UserInput";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const ErrorMessage = styled.p`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: red;
    font-size: 20px;
`

const UploadVideo = () => {
    const [failedUpload, setFailedUpload] = useState(false);

    const [form, setForm] = useState({
        title: "",
        description: "",
        file: null,
    });

  const handleChange = (event) => {
    const inputValue =
      event.target.name === "file" ? event.target.files[0] : event.target.value;
    setForm({
      ...form,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const videoData = new FormData();
    videoData.enctype = "multipart/form-data";

        videoData.append("videoFile", form.file);
        videoData.append("title", form.title);
        videoData.append("description", form.description);
        
        const uploadVideo = postVideo(videoData);

        if(uploadVideo === "UploadError"){
            setFailedUpload(true);
        }
    };

    return (
        <div className="upload-save-vid">
            <br />
            <br />
            <form id="vid-submitting-form" onSubmit={handleSubmit}>
                <div className="upload-video">
                    <UserInput
                        onChange={handleChange}
                        type="text"
                        name="title"
                        autoComplete="off"
                        required
                        placeholder="Övningstitel"
                    />
                    <TextArea
                        onChange={handleChange}
                        type="text"
                        name="description"
                        required
                        autoComplete="off"
                    />
                    <input
                        onChange={handleChange}
                        accept="video/mp4"
                        type="file"
                        name="file"
                        id="filechoose"
                        required
                        placeholder="Add Video File"
                    />
                    <br></br>
                    <br></br>

                    {failedUpload ? <ErrorMessage>
                        Något gick fel med att ladda upp övningen!</ErrorMessage> : false}
                        
                    <Button type="submit">Ladda upp ny övning</Button>
                </div>
            </form>
        </div>
      </form>
    </div>
  );
};
export default UploadVideo;
