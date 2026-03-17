import {Link} from 'react-router-dom'
import todaysConcept from "./Homepage1";
import VocabAPI from "./VocabAPI";

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
        <Link to ={`/vocab/${VocabAPI[todaysConcept()].word}`}>
                <div style={{color:"white",fontWeight:"normal"}}> Play-Concept- of the week:
            <div>{VocabAPI[todaysConcept()].word}</div>
        </div>
        </Link>
        </div>
        </div>
    );
}