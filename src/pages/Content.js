import React from "react";
import '../App.css'; 
 
function Content() {
  return (
    <div className="Content">
      <h2 id ="align">React Data Table Component</h2>
      <div className="data">
      <p>Creating yet another React table library came out of necessity while developing a web application for a growing startup. I discovered that while there are some great table libraries out there, some required heavy customization, were missing out of the box features such as built in sorting and pagination, or required understanding the atomic structure of html tables.</p>
      </div>
      <div className="data">
        <p>If you want to achieve balance with the force and want a simple but flexible table library give React Data Table Component a chance. If you require an Excel clone, then this is not the React table library you are looking.</p>
      </div>
 
      <h2 className="subtopic">Key Features</h2> 
      <div className="points">
      <li> Declarative configuration </li><br></br>
     
    
      <li>Built-in and configurable:</li> 
      <div className="align3">
      <ul> <li> Sorting</li> 
    <li> Selectable Rows</li> 
    <li> Expandable Rows</li>
    <li> Pagination</li>&nbsp; </ul>
   
    </div>
    
    <li>Themeable/Customizable</li>&nbsp;
    
    <li>Accessibility</li>&nbsp;
    <li>Responsive(via x-scroll/flex)</li> 
      </div>
  </div>
  
  )
}

export default Content;