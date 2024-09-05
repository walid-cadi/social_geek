import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import  Home from "./pages/home";
import { Groups } from "./pages/groups/Groups";
import Friend_request from "./pages/Friend Request/friend_request";




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
          <Route path="/friend_request" element={<Friend_request />} />
        </Routes>
      </div>
    </div>

    </>
  );
}

export default App;
