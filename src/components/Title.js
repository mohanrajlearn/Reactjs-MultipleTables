import React from "react";
import styled from "styled-components";
import './Title.css';
 
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 0px 1050px;
  cursor: pointer;
`;
function Title() {
  return (
    <div className="Title">
      <h1>REACT@DATATABLES</h1>
      <a href="https://github.com/mohanrajlearn/Reactjs-MultipleTables" target="_blank">
  <Button> Download </Button>
</a> 
</div>
  )
}

export default Title;
