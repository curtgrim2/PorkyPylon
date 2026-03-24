import vocabwords from "./VocabAPI";
import VocabAPI from "./VocabAPI";
import {Link, useParams} from "react-router-dom";



export default function VocabDefine(){

    const {word} = useParams();
    const selectterm = VocabAPI.find(x=> x.word === word);
    return(
        <div style={{height:"100vh", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
            <h1 style={{textAlign: "center"}}>{selectterm.word}</h1>
            
            <div style={{width:"70%",height:"75%"}}>
            <Link to="/vocab">< div style={{backgroundColor:"white",position:"relative",width:"fit-content",textAlign:"center"}}>Back to Vocab</div></Link>
          <p className="vocabDescription">{selectterm.description}</p>
          </div>
            <div id="relatedcase"><span>Related Terms:</span>{selectterm.related ? selectterm.related.map((item, index) => <Link className="relatedlinks" to={`/vocab/${item}`} key={index}>{item}</Link>) : "  No related terms"}</div>
        </div>
    );
}