import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";
import "../../index.css";
import { Images } from "../../constant";

const Register = () => {
  const { dataProfile, setDataProfile, generateCode } = MyAppContext();
  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [birthInputValue, setBirthInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [gendreValue, setGendreValue] = useState("");
 

  const navigate = useNavigate();
  // let code = generateCode
  // const random = ()=>{
  //   if (!generatedCode) {
  //     code = generateCode();
  //     setGeneratedCode(code);
  //   }
  // }

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = generateCode();

    const newProfile = {
      firstName: firstInputValue,
      lastName: lastInputValue,
      email: emailInputValue,
      birth: birthInputValue,
      password: passwordInputValue,
      confirmPassword: confirmPasswordInputValue,
      gendre: gendreValue,
      post: [],
      generateCode: code,
      followers: [],
      follows: [],
      groups: [],
      firstTime : false,
      profile: ``,
      bio:"" ,
      profile:" ",
      biography: "",
      cover : ""
    };

    if (
      invalidChars.test(firstInputValue) ||
      invalidChars.test(lastInputValue)
    ) {
      setValidationMessage("Your name contains special characters.");
      return;
    } else if (passwordInputValue !== confirmPasswordInputValue) {
      setValidationMessage("Passwords do not match.");
      return;
    } else if (
      dataProfile.find((element) => element.email === emailInputValue)
    ) {
      setValidationMessage("This email already exists.");
      return;
    } else if (
      dataProfile.find((element) => element.lastName === lastInputValue)
    ) {
      setValidationMessage("This last name already exists.");
      return;
    } else if (passwordInputValue === "" || confirmPasswordInputValue === "") {
      setValidationMessage("You should enter your password.");
      return;
    } else {
      setDataProfile([...dataProfile, newProfile]);

      navigate("/verification", {
        state: { notificationMessage: "Registration Successful!" },
      });
      
      //console.log(newProfile);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center w-[100%] h-[50vw]">
      <div className="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div>
            <img src={Images.logo} className="w-16" alt="Logo" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-extrabold mb-4">
              Register for Social Geek
            </h1>
            <div className="w-full flex-1">
              <div className="max-w-xs">
                {validationMessage && (
                  <p className="text-red-500 mb-4">{validationMessage}</p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-4 w-full mb-4">
                    <label className="flex flex-col w-full">
                      <input
                        value={firstInputValue}
                        onChange={(e) => setFirstInputValue(e.target.value)}
                        type="text"
                        className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Firstname"
                      />
                    </label>
                    <label className="flex flex-col w-full">
                      <input
                        value={lastInputValue}
                        onChange={(e) => setLastInputValue(e.target.value)}
                        type="text"
                        className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Lastname"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col w-full mb-4">
                    <input
                      value={emailInputValue}
                      onChange={(e) => setEmailInputValue(e.target.value)}
                      type="email"
                      className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      placeholder="Email"
                    />
                  </label>
                  <label className="flex flex-col w-full mb-4">
                    <input
                      value={birthInputValue}
                      onChange={(e) => setBirthInputValue(e.target.value)}
                      type="date"
                      className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                  </label>

                  <label className="flex flex-col w-full mb-4">
                    <input
                      value={passwordInputValue}
                      onChange={(e) => setPasswordInputValue(e.target.value)}
                      type="password"
                      className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      placeholder="Password"
                    />
                  </label>
                  <label className="flex flex-col w-full mb-4">
                    <select className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={gendreValue}
                    onChange={(e) => setGendreValue(e.target.value)}
                    >
                    
                        <option selected disabled value="">
                        Select Sex
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                  <label className="flex flex-col w-full mb-4">
                    <input
                      value={confirmPasswordInputValue}
                      onChange={(e) =>
                        setConfirmPasswordInputValue(e.target.value)
                      }
                      type="password"
                      className="w-full p-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      placeholder="Confirm Password"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-[#2563eb] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
                    <span className="ml-3">Register</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
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

export default Register;
