import React from 'react';
import './Card.css'; // Importing the CSS file

const Card = (props) => {
    // Combine the class name provided as props with 'card'
    const classes = 'card ' + props.className;
    
    // Return the div with the combined class name
    return <div className={classes}>{props.children}</div>;
};

export default Card;
