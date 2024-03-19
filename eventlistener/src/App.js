import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked")
    }

    function handleOnMouseHover() {
        console.log("MouseHover")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseHover={handleOnMouseHover}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}