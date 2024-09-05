import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import  Home from "./pages/home";
import { Groups } from "./pages/groups/Groups";




function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/groups" element={<Groups/>}/>
        </Routes>
      </div>
    </div>

    </>
  );
}

export default App;
