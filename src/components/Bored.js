import React from "react";

function Bored({
activity, 
type,
}) {
    return(  
    <div className="Bored">
    <h1>activity: {activity} </h1>
        <h2>type: {type}</h2>
        </div>
    )
}
export default Bored;