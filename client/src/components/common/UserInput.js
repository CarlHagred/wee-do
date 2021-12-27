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

const StyledInputPatient = styled(StyledInput)`
  height: 2.5em;
  font-size: 1.5em;
  @media (max-width: 375px) {
    font-size: 1.3em;
    height: 2em;
  }
`;

const StyledDatalist = styled.datalist`
  font-size: 16px;
  background-color: white;
  text-align: left;
  border-radius: 4px;
  height: 20px;
  width: 30px;
`;

export const CustomDatalist = (props) => {
  return (
    <StyledDatalist
      id="datalist"
      name="name"
      placeholder="skriv här..."
      {...props}
    />
  );
};

export const PatientInput = (props) => {
  return (
    <StyledInputPatient
      id="input"
      type="text"
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

export default UserInput + PatientInput + CustomDatalist;
