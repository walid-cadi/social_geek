import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../../constant/images";
import { MyAppContext } from "../../context";

const Login = () => {
  const  {dataProfile , setUserData , userData, test} = MyAppContext() 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin =  (e) => {
    e.preventDefault();

    
    const user = dataProfile.find(
      (profile) => profile.email === email && profile.password === password
    );
    
    

    if (user) {
      
      setLoginMessage("Login successful!");
      //console.log("Logged in user:", user);
      test(user)
      //console.log(userData);
      navigate("/home");
    } else {
      
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center w-[100%] h-[45vw]">
      <Link to="/register" >register</Link>
      <div className="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div>
            <img src={images.logo} className="w-16" alt="Logo" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-extrabold mb-4">
              Sign in to Social Geek
            </h1>
            <div className="w-full flex-1">
              <div className="max-w-xs">
                {loginMessage && (
                  <p className={`text-center ${loginMessage.includes('successful') ? 'text-green-500' : 'text-red-500'} mb-4`}>
                    {loginMessage}
                  </p>
                )}
                <input
                  className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-[#2563eb] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleLogin}
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's{" "}
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </Link>{" "}
                  and its{" "}
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
