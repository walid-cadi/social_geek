import images from "../../constant/images";
import { CiLock, CiMail } from "react-icons/ci";

const Login = () => {
   
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <img className="w-[40vw]" src={images.login} alt="" />
        </div>
        <div className="w-[60vw] flex flex-col gap-5 mt-3">
          <div className=" flex gap-2 justify-end">
            <button className="px-10 py-4 rounded-full cursor-pointer border-0 text-white bg-[#353a40] shadow-md tracking-wider uppercase text-sm transition-all duration-500 ease-out hover:tracking-widest hover:bg-[#006aff] hover:text-black hover:shadow-xl active:tracking-widest">
              Login
            </button>
            <button className="px-10 py-4 text-white rounded-full cursor-pointer border-0 bg-[#006aff] shadow-md tracking-wider uppercase text-sm transition-all duration-500 ease-out hover:tracking-widest hover:bg-white hover:text-black hover:shadow-xl active:tracking-widest ">
              Register
            </button>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h1 className="text-3xl  font-semibold tracking-tight flex items-center pl-7 w-25">
              Login into your account
            </h1>

            <form className="flex  flex-col gap-2.5 max-w-xs bg-white p-5 rounded-2xl relative">
              <p className="text-gray-600 text-sm">
                Login now and get full access to our Social Geek.
              </p>

              <label className="relative">
                <input
                  required
                  placeholder=""
                  type="email"
                  className="w-full p-2.5 pt-5 border border-gray-400/40 rounded-lg outline-none"
                />
                <span className=" flex items-center gap-1 absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all ease-in-out">
                  <CiMail />
                  Email
                </span>
              </label>

              <label className="relative">
                <input
                  required
                  placeholder=""
                  type="password"
                  className="w-full p-2.5 pt-5 border border-gray-400/40 rounded-lg outline-none"
                />
                <span className="  flex items-center gap-1 absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all ease-in-out">
                  <CiLock />
                  Password
                </span>
              </label>

              <button className="border-none outline-none bg-[#353a40] p-2.5 rounded-lg text-white text-lg transition-transform duration-300 ease-in-out hover:bg-blue-600">
                Submit
              </button>
              <button className=" flex  justify-start gap-4 items-center border-none outline-none bg-[#0d66ff] p-2.5 rounded-lg text-white text-lg transition-transform duration-300 ease-in-out hover:bg-blue-600">
                <img className="w-9 h-9 rounded-sm    " src={images.google} alt="" />
                Login with Google
              </button>
              <button className=" flex  justify-start gap-4 items-center border-none outline-none bg-[#3b5999] p-2.5 rounded-lg text-white text-lg transition-transform duration-300 ease-in-out hover:bg-blue-600">
                <img className="w-9 rounded-sm    " src={images.facebbok} alt="" />
                Login with Facebook
              </button>
              

              <p className="text-gray-600 text-sm text-center">
                You don't have an account?
                <p
                  href="#"
                  className="text-[royalblue] hover:underline font-bold cursor-pointer"
                >
                  Sign up
                </p>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
