import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  border: 2px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;

  padding: 8px 16px;
  margin-bottom: 10px;
  text-align: left;
`;

const StyledInputPatien = styled(StyledInput)`
  height: 2.5em;
  font-size: 1.5em;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

export const PatientInput = (props) => {
  return (
    <StyledInputPatien
      id="input"
      type="number"
      placeholder="Användarnamn..."
      onChange={props.onChange}
      {...props}
    />
  );
};

export const UserInput = (props) => {
  return (
    <StyledInput
      id="input"
      type="text"
      placeholder="Användarnamn.."
      onChange={props.onChange}
      {...props}
    />
  );
};

export default UserInput + PatientInput;
