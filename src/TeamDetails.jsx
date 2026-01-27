import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsAPI from "./TeamsAPI";



export default function TeamDetails(){
    const { selectteam } = useParams();
    //const [team, setTeam] = useState(null);
    const displayteam = TeamsAPI.find(x=> x.name===selectteam);

   /* useEffect (() => {
        fetch(`http://localhost:5173/teams/${id}`)
        .then(res=> res.json())
        .then(data => setBook(data));
    }, [selectteam]
);*/


if(!displayteam) return <p>ERROR</p>;

return(
<div className="teamdetailsdiv" style={{backgroundColor:displayteam.primaryColor}}>
    <h2 style={{backgroundColor:"white",textAlign:"center"}}>{displayteam.name}</h2>
    <img className="displaylogo2"src={displayteam.logo} />
</div>
);
}