import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import  Home from "./pages/home";
import { Groups } from "./pages/groups/Groups";
import Friend_request from "./pages/Friend Request/friend_request";
import Profil from "./pages/profil/profil";
import Setting from "./pages/setting/setting";
import { GroupPage } from "./pages/groups/Group";




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
          <Route path="/group" element={<GroupPage/>}/>
          <Route path="/friend_request" element={<Friend_request />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>

    </>
  );
}

export default App;
