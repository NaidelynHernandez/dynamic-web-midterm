import React from "react";

function Bored({
activity, 
type,
}) {
    return(  
    <div className="Bored">
        <h1>Here's an activity you can try: {activity} </h1>
        <p>Type: {type}</p>
    </div>
    )
}
export default Bored;