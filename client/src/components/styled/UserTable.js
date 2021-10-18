import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  /*border: none;*/
  border-collapse: separate;
  border-spacing:  5px;
  width: 100%;
  margin: 1em 0;
  justify-content: left;



  empty-cell: show;
  /* empty-cell is a property of table or the cells themselves */

  /*vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length>*/
        

  /*tbody {
    vertical-align: top;
  }*/              
  


  td,th {
    /*border: 1px solid;*/
    padding: 5px 10px;
    border-radius: 0px;
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
    text-align: left;
    
  } 

  tbody tr {
    :nth-of-type(odd) {
      background-color: rgb(216, 228, 255, 33%);

    }
    :nth-of-type(even) {
        background-color: rgb(216, 228, 255, 33%);
      }
    :hover {
      background: rgb(108, 153, 255, 33%);
    }

    
    

  }
  thead {
    background-color: #c2c2c2;
    

    
  }
`;


export default ({ users }) => (
  <UserTable titles={Object.keys(users[0])} users={users} />
);


const UserTable = ({ titles, users }) => (
  <StyledTable>
    <colgroup>
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {users.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
