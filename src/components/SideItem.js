import React from 'react'

const SideItem = ({items}) => {
const { name, links, open} = items;
const [isOpen, setOpen] = React.useState(open);

const openSideNav = () => {
    setOpen(!isOpen);
}; 
    return (
        <div onClick={() => openSideNav()} style={sideItemStyle}>
            <p style={nameStyle}>{name}</p>
            {isOpen && 
            links.map((link, index) => {
                const {title, to } = link;
                return(
                    <div key = {index} style={linkContainerStyle}>
                        <a href = {to} style={linkStyle}>
                        <p style={nameStyle}>{title}</p>
                        </a>
                        </div>
                );
            })

            }
        </div>
    );
};


//styling
const nameStyle = {
    margin: "20px",
    fontWeight: "600",
    
     
};

const sideItemStyle = {
    height:"auto",
    minHeight: "50px",
    width: "350px",
    
    color: "#fff",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
};

const linkContainerStyle = {
    
height: "auto",
width: "350px",
background: "#FAFAFA",
borderTop: " 1px solid #D6D6D6",
borderBottom: " 1px solid #D6D6D6",
/*"@keyframes: fadeTest":{
    from: { opacity: 0},
    to: { opacity: 1},
},
animation: "0.6s ease-in fadeTest 0s",*/
};

const linkStyle = {
    textDecoration: "none",
    color:"#555555",
};





export default SideItem;
