import { Route, Routes } from "react-router-dom";
import "./index.css";
import Profilee from "./pages/profilee";
import Settings from "./pages/settings";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Verification from "./pages/authentication/verification";
import { MyProvider } from "./context";
import Setting from './pages/setting/setting'
import Homepage from "./pages/homepage";
import Grouppage from "./pages/grouppage";
import Friends from "./pages/friends";
import Stories from "./pages/stories";
import LandingPage from "./pages/Landing-Page/landingPage";
import { ErrorPage } from "./pages/Error/error";
function App() {
  return (
    <>
    
      <MyProvider>
  
        <Routes>
          <Route path="/*" element={< ErrorPage/>} />
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/verification" element={<Verification />}/>
          <Route path="/profile" element={<Profilee />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/groups" element={<Grouppage/>}/>
          <Route path="/friend_request" element={<Friends />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/stories" element={<Stories />} />

        </Routes>
      
    
    </MyProvider>
    
    </>
  );
}

export default App;
