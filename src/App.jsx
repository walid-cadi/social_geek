import { MyProvider } from "./context";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Market from "./pages/market/market";
import Marketinfo from "./pages/market/marketInfo";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/marketinfo/:id" element={<Marketinfo />} />
      </Routes>
    
    
  <MyProvider>
    
  </MyProvider>
    </>
  );
}

export default App;
