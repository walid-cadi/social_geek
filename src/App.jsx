import { MyProvider } from "./context";
import "./index.css";
import SideBar from "./layouts/dashboard";
import Navbar from "./layouts/navbar";
import  Home from "./pages/home";




function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <SideBar />
        <Home/>
      </div>
    </div>
    </>
  );
}

export default App;
