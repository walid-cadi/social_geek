import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import  Home from "./pages/home";
import { Groups } from "./pages/groups/Groups";
import Friend_request from "./pages/Friend Request/friend_request";
import Profil from "./pages/profil/profil";
import Setting from './pages/setting/setting'
import ExploreStories from "./pages/exploreStories/exploreStories";


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
          <Route path="/profile" element={<Profil />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/stories" element={<ExploreStories/>} />

        </Routes>
      </div>
    </div>

    </>
  );
}

export default App;
