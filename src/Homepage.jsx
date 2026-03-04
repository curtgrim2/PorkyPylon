import {Link} from 'react-router-dom'

export default function Homepage(){
    return(
        <div id="homepagecontainer">
        <div id="homepage"> 
        <Link to="/teams"><div id="teamslink">All Teams</div> </Link>

        <div id="playstyles"> 
            <div id="pstag">Vocab</div>
            <ul>
           <Link to="/vocab"><li>Offense</li> </Link> {/*We'll need a database for these */}
            <li>Defense</li>
            </ul>
        </div>
    
        <div>Games</div>
        <div>Popular Play-Concept- of the week</div>
        </div>
        </div>
    );
}