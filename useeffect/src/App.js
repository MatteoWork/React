import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}