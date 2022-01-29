import React from "react";
import '../components/Title.css'; 
 
function Content() {
  return (
    <div className="Content">
      <h1>React Data Table Component</h1>
      <div className="data">
      <p>Creating yet another React table library came out of necessity while developing a web application for a growing startup. I discovered that while there are some great table libraries out there, some required heavy customization, were missing out of the box features such as built in sorting and pagination, or required understanding the atomic structure of html tables.</p>
      </div>
      <div className="data">
        <p>If you want to achieve balance with the force and want a simple but flexible table library give React Data Table Component a chance. If you require an Excel clone, then this is not the React table library you are looking for <span>👋</span></p>
      </div>
 
      <h1 className="subtopic">Key Features</h1> 
      <div className="points">
      <li > Declarative configuration </li>
     
    <div>
      <li>Built-in and configurable:</li>
      
   <ul>
    <li>Sorting</li>
    <li>Selectable Rows</li>
    <li>Expandable Rows</li>
    <li>Pagination</li>
    </ul>
    
    </div>
    
    <li>Themeable/Customizable</li>
    
    <li>Accessibility</li>
    <li>Responsive(via x-scroll/flex)</li> 
      </div>
  </div>
  
  )
}

export default Content;