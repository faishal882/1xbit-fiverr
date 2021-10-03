import React from 'react'
import "../CSS/TotoCard.css"


function TotoCard(props) {
 return (
   <div
     className="totocard"
     style={{
       backgroundImage: `url(${props.background})`,
       backgroundSize: "cover",
     }}
   >
     <h4 className="totocard-header">{props.header}</h4>
   </div>
 );
}

export default TotoCard
