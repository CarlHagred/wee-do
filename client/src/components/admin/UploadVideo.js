import React, { useState } from "react";

import { postVideo } from "../../api/index.js";

import UserInput from "../common/UserInput";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const UploadVideo = () => {
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
    postVideo(videoData);
  };

  return (
    <div className="upload-save-vid">
      <form id="vid-submitting-form" onSubmit={handleSubmit}>
        <div className="upload-video">
          <UserInput
            onChange={handleChange}
            type="text"
            name="title"
            autoComplete="off"
            placeholder="Övningstitel"
          />
          <TextArea
            onChange={handleChange}
            type="text"
            name="description"
            autoComplete="off"
          />
          <input
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            id="filechoose"
            placeholder="Add Video File"
          />
          <br></br>
          <br></br>
          <Button type="submit">Ladda upp ny övning</Button>
        </div>
      </form>
    </div>
  );
};
export default UploadVideo;
