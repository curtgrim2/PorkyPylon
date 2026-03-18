import {Link } from "react-router-dom";
import {useState} from "react";
import VocabAPI from "./VocabAPI";

export default function Vocab(){

const [type,setType] = useState("all");
const [side, setSide] = useState("both");

//
const filterVocab = VocabAPI.filter(word =>{ //This is where setType triggers the filter function to run again and update the list of vocab words on the page. We can use this same method to filter by offense/defense as well, we just need to add another state variable and dropdown menu for it.
    if(type==="all" && side==="both") return true;

    if(type==="all" && side !== "both") return word.side === side;
    if(side==="both" && type !== "all") return word.type===type && (word.side === "offense" || word.side === "defense");
    return word.type === type && word.side === side;
});



    return(
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>Football Vocabulary</h1>

        <div style={{width:"fit-content",backgroundColor:"grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        
        <div style={{width:"100%"}}>
             <select className="dropdowns" onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="scheme">Scheme</option>
            <option value="alignment">Alignment</option>
            <option value="formation">Formation</option>
            <option value="position">Position</option>
        </select>

        <select className="dropdowns" onChange={(e)=>setSide(e.target.value)}>
            <option value="both">Both</option>
            <option value="offense">Offense</option>
            <option value="defense">Defense</option>
        </select>
        </div>
       

        
        <div className="vocabcase">
            <div className="vocabcase2">{filterVocab.map((object)=>
            < Link key={object.word} className="vocab" to={`/vocab/${object.word}`}>
                {object.word}
            </Link>
            )}
        </div>

        </div>

        </div>
        </div>

    );
}