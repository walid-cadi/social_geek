import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import Home from "./pages/home";
import { Groups } from "./pages/groups/Groups";
import Friend_request from "./pages/Friend Request/friend_request";
import Profil from "./pages/profil/profil";
import Setting from "./pages/setting/setting";
import ExploreStories from "./pages/exploreStories/exploreStories";
import { GroupPage } from "./pages/groups/Group";
import Register from "./pages/authentication/register";
import Verification from "./pages/authentication/verification";
import Login from "./pages/authentication/login";

function App() {
  return (
    <>
      <MyProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="flex">
            <SideBar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/group/:grpName" element={<GroupPage />} />
              <Route path="/friend_request" element={<Friend_request />} />
              <Route path="/profile" element={<Profil />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/stories" element={<ExploreStories />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </MyProvider>
    </>
  );
}

export default App;
