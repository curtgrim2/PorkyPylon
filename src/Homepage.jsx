import {Link} from 'react-router-dom'

export default function Homepage(){
    return(
        <div id="homepagecontainer">
        <div id="homepage"> 
        <Link to="/teams"><div id="teamslink">All Teams</div> </Link>

        <ul id="playstyles"> <div id="pstag">Play Styles</div>
            <li>Offense</li> {/*We'll need a database for these */}
            <li>Defense</li>
        </ul>
    
        <div>Games</div>
        <div>Popular Play-Concept- of the week</div>
        </div>
        </div>
    );
}