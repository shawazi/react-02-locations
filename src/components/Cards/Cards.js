import data from "../../helper/data";
import React from "react";
import './cards.css';

const Cards = () => {

    return (
        <div className="container">
            {data.map((item) => (
            <div className="card">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
            </div>
            ))}
        </div>
    )
}

export default Cards;