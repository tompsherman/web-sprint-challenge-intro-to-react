// Write your Character component here
import React from "react"

const Character = ({characters}) => {
    console.log ("what is", characters)
    return(
        <div>
            <h2>{characters}</h2>
        </div>
    )
}

export default Character