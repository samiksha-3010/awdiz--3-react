 
import React, {useState}  from "react";

 const DynamicStyles = () =>{
 const [backgroundColor, setBackgroundColor] = useState('red');
 const handleButtonClick = () =>{
    backgroundColor('blue');

 };
 const styles ={
    backgroundColor: backgroundColor,
    color:'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer'

 };


 return (
    <div style={styles} onClick={handleButtonClick}>
        click me to the and chenge the background
    </div>
 )
};

  export default DynamicStyles
 

