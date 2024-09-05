
import "./index.css";
import { Routes , Route} from 'react-router-dom';
import Profilee from "./pages/profilee";
import Settings from "./pages/settings";
function App() {
  
return (
    <>
      <Routes>
        <Route path="/" element={<Profilee/>} />
        <Route path="/setting" element={<Settings/>} />

      </Routes>
    
    </>
  );
}

export default App;

