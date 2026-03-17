import {Link} from 'react-router-dom'
import todaysConcept from "./Homepage1";

export default function Homepage(){
    return(
        <div id="homepagecontainer">
        <div id="homepagebubble"> 
        <Link to="/teams"><div id="teamslink">All Teams</div> </Link>

        {/*<div id="playstyles"> */}
            
           <Link to="/vocab">            
           <div id="pstag">Vocab</div>
            </Link> {/*We'll need a database for these 
            
        </div>*/}
    
        <div>Games</div>
        <div>Popular Play-Concept- of the week
            <div>{todaysConcept()}</div>
        </div>
        </div>
        </div>
    );
}