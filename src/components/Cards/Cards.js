import data from "../../helper/data";
// import React, { useState } from "react";
import './cards.css';

const Cards = () => {

    // const [display, setDisplay] = useState(false);

    return (
        <div className="container">
            {data.map((item) => (
            <div key={item.id} className="card">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
                <div>
                    <p className="hide">{item.desc}</p>    
                </div>
            </div>
            ))}
        </div>
    )
}

export default Cards;