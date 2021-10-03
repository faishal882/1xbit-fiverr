import React from 'react'
import "../CSS/TotoBig.css"

function TotoBig(props) {
 return (
   <div
     className="totobig"
     style={{
       backgroundImage: `url(${props.background})`,
     }}
   >
     <h4 className="totobig-header">{props.header}</h4>
   </div>
 );
}

export default TotoBig
