import React from 'react'
import SideItem from './SideItem';
import { NavItems } from '../data/NavItemsData';
import '../App.css'; 
 
const SideNav = () => {
         return (
        <div class="sideNavStyle"> 
           {NavItems.map((navItem, index) => {
return <SideItem key = {index} items = {navItem}/>;
           }
           )}
        </div>
    );
};

//Styling
// const sideNavStyle = {
//     height: "100vh",
//     width: "350px",
//     background: "rgb(55,82,131)",
//     //background: "liner-gradient(135deg, rgba(55,82,131,1) 0% rgba(20,96,194,1)",
//     position: "absolute",
//     border: "1px solid transparent",
//     left:0,
//     textAlign:"left",
// };

/*const headerStyle = {
    fontWeight: "600",
    padding: "30px 50px",
    color: "#fff"
};*/

 
export default SideNav;
