import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={`./${props.img}`} className="card--image" alt="katie"/>
            <div className="card--stats">
                <img src="./star.png" alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}