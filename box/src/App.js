import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {

    function toggle(id) {
        console.log(id)
    }
    
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} 
             id={square.id}
             on={square.on} 
             toggle={toggle}/>
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}