import { Route, Routes } from "react-router-dom";
import { MyProvider } from "./context";
import "./index.css";
import { Groups } from "./pages/groups/Groups";
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";
import Verification from "./pages/authentication/verification";

function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
