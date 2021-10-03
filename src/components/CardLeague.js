import React from 'react'
import '../CSS/CardLeague.css'
import {Link} from "react-router-dom"

function CardLeague(props) {
 return (
   <div
     className="cardleague"
     style={{
       backgroundImage: `url(${props.background})`,
       backgroundSize: "cover",
     }}
   >
     <h4 className="cardleague-header">UEFA League</h4>
     <p className="cardleague-text">
       More games with your favourite clubs in the new
     </p>
     <p className="cardleague-text1">tournament from uefa!</p>
     {/* <button className="cardleague-btn">PLACE A BET</button> */}
     <div className="cardleague-btn">
       <Link to="/live/" className="cardleague-link">
         PLACE A BET
       </Link>
     </div>
   </div>
 );
}

export default CardLeague
