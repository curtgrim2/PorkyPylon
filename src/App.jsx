import {  Link ,Routes,Route} from "react-router-dom"
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import AllTeams from "./AllTeams";
import TeamDetails from './TeamDetails'
import Homepage from './Homepage'
import Vocab from "./VocabMain";
import VocabDefine from "./VocabDefine";



function App() {
  //const [count, setCount] = useState(0)

  return(
    <div>
      <Link to="/"> <div id="websitename" ><span >Porky Pylon</span> <img id="weblogo" src="/porkypylon/porkypylon.png" /> </div></Link>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/teams" element={<AllTeams/>}/>
      <Route path="/teams/:selectteam" element={<TeamDetails />}/>
      <Route path ="/vocab" element={<Vocab />}/>
      <Route path="/vocab/:word" element={<VocabDefine />}/>
    </Routes>
    </div>
  );
}

export default App
/* 
 <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

<a style ={{display:"hidden"}} href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a style ={{visibility:"none"}} href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */