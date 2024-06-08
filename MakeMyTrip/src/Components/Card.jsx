import React from "react";
import React, {usestate} from "react";

const Card = ({ id, image, info, price, name }) => {
    return(
        <div className="Card">
            <img src= {image}></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4>{price}</h4>
                    <h4>{name}</h4>
                </div>
                <div className="description">{info}</div>
            </div>
            <button>Not Interested</button>
        </div>
    )
}
export default Card;