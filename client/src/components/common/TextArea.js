import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;

    border: 2px solid #ccc;
    border-radius: 4px;

    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;

    padding: 8px 16px;
    margin-bottom: 10px; ;
`;

const TextArea = (props) => {
    return (
        <StyledTextArea
            id="textarea"
            type="text"
            placeholder="Beskrivning.."
            onChange={props.onChange}
            {...props}
        />
    );
};
export default TextArea;
