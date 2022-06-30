import React from "react";
import '../App.css'; 
 
function HomePage() {
  return (
    <div className="Content">
      <h2 id ="align2">An Introduction to React Tables</h2>
      <div className="data">
      <p>A table, also called a data grid, is an arrangement of data in rows and columns, or possibly in a more complex structure. It is an essential building block of a user interface. I’ve built tables using Reactjs. I’ve also used a number of third party tables. As a UI developer, there’s no escape from table components.</p>
      </div>
      <div className="data">
        <p>I would recommend using React Table, which provides a utility belt for lightweight, fast, and extendable data grids. It presents a custom hook, useTable, which implements row sorting, filtering, searching, pagination, row selection, infinity scrolling, and many more features.</p>
      </div>
 
      <h2 className="subtopic2">Types of Tables:</h2> 
      <div className="points2">  
    <ol>
    <li> Basic Table</li><br></br>
    <li> Filtering Table</li><br></br>
    <li> Pagination Table</li><br></br>
    <li> Sorting Table</li><br></br>
    <li> Sticky Table</li><br></br>
    <li> Row Selection Table</li> <br></br>   
    <li> Operations Table</li>
        
    </ol> 
    
      </div>
  </div>
  
  )
}

export default HomePage;