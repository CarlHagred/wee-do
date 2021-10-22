import styled from "styled-components";

// Jobbar på att få till lite snyggare och smartare input-fält för login

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
  margin-bottom: 10px; ;
`;

const PasswordInput = (props) => {
  return (
    <StyledInput
      id="input"
      type="password"
      placeholder="Användarnamn.."
      onChange={props.onChange}
      {...props}
    />
  );
};

export default PasswordInput;
