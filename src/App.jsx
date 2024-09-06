import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import Register from "./pages/authentication/register";
import Verification from "./pages/authentication/verification";
import Login from "./pages/authentication/login";
import UpDateProfile from "./pages/authentication/upDateProfile";

function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path="/registration" element={<Register />} />
          <Route path="updateProfile" element={<UpDateProfile />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
