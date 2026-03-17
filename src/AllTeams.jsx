import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import TeamsAPI from "./TeamsAPI";




export default function AllTeams(){
    const [backInfo,setBackInfo]=useState();

      const newBackground = (logo) =>{
        setBackInfo(logo);
         //console.log(backInfo);
         var fadedback=document.getElementById("fadedback");
         fadedback.style.backgroundImage=`url(${backInfo})`;
            fadedback.style.backgroundSize="cover";
            fadedback.style.backgroundPosition="center";
            fadedback.style.backgroundRepeat="no-repeat";
      };

  useEffect(() => {
  if (backInfo) {
    newBackground();
  }
}, [backInfo]);





function hexToRGBA(hex, opacity) {
  // Remove # if present
  hex = hex.replace("#", "");

  // Handle shorthand hex (#f00)
  if (hex.length === 3) {
    hex = hex.split("").map(char => char + char).join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
    
    return (
<div style={{overFlow:"no-scroll",height:"100vh",width:"100vw",display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}> 
  {/*style =
{{height:"99%",display:"flex", flexDirection:"column", alignItems:"center",
justifyContent:"center"}} */}
    <div id="fadedback"></div>
    <div id="atcontainer">
    <div id="allteamspage">
     {TeamsAPI.map((team)=> 
     <Link className="clicktheteam" 
     key={team.name}
     to={`/teams/${team.name}`} 
     id={team.name}   
     onMouseEnter={()=>{newBackground(team.logo);}} 
     style={{
      cursor:"pointer",
      backgroundColor:hexToRGBA(team.primaryColor,0.8),
      color:team.secondaryColor}}>
      {team.name}
      <img src={team.logo} alt={team.name} className="teamlogo"/>
      </Link>)}
    

    </div>
    </div>
    </div>
    );
}


