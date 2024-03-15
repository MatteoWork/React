import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="./katie-zaferes.png" className="card--image" alt="katie"/>
            <div className="card--stats">
                <img src="./star.png" alt="star" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}