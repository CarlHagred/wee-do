import React, { useState } from "react";
import { postVideo } from "../../api/index.js";
import styled from "styled-components";

import { UserInput } from "../common/UserInput";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import TopWrapper from "../common/TopWrapper";

const StyledInput = styled.input`
  padding-bottom: 0.7em;
`;

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
    <>
      <TopWrapper header="Ladda upp övning" />
      <div className="upload-save-vid">
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
            <StyledInput
              onChange={handleChange}
              accept="video/mp4"
              type="file"
              name="file"
              id="filechoose"
              required
              placeholder="Add Video File"
            />
            <Button type="submit">Ladda upp ny övning</Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UploadVideo;
