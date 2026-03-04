import {Link } from "react-router-dom";
import {useState} from "react";
import VocabAPI from "./VocabAPI";

export default function Vocab(){

const [type,setType] = useState("all");

//
const filterVocab = VocabAPI.filter(word =>{
    if(type==="all") return true;
    return word.type === type;
});



    return(
        <div>
        <h1>Football Vocabulary</h1>
        <select onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="scheme">Scheme</option>
            <option value="alignment">Alignment</option>
        </select>

        
        <div className="vocabcase">
            <div>{filterVocab.map((object)=>
            < Link key={object.word} className="vocab" to={`/vocab/${object.word}`}>
                {object.word}
            </Link>
            )}
        </div>

        </div>
        </div>

    );
}