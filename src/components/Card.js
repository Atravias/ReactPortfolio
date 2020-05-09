import React from "react";


function Card(props) {
    console.log("Card props:", props)
    return (
        <div className={props.class}>

            <h4><a href={props.href} target="_blank"
                style={{ color: "black" }, { textAlign: "center" }}>{props.text}</a>
            </h4>

        </div>

    )
};

export default Card;