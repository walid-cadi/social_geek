import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";
import "../../index.css";
import { Images } from "../../constant";

const Register = () => {
  const [generatedCode, setGeneratedCode] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState(""); 
  useEffect(() => {
   
    setTimeout(() => {
      generateCode();
    },3000 );
  }, []);

  const showNotification = (message, type = "success") => {
    setNotificationMessage(message);
    setNotificationType(type);

    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        notify(message);
      } else {
        Notification.requestPermission().then((res) => {
          if (res === "granted") {
            notify(message);
          } else {
            console.error("Did not receive permission for notifications");
          }
        });
      }
    } else {
      console.error("Browser does not support notifications");
    }
  };
  const notify = (message) => {
    const notification = new Notification("Verification:", {
      body: message,
      icon: "https://unsplash.it/400/400",
      vibration: [300, 200, 300],
    });

    notification.addEventListener("click", function () {
      window.open("https://www.example.com");
    });

    setTimeout(() => notification.close(), 5000);
  };

  const generateCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
    console.log("Generated Code:", code); 
    showNotification(`Your verification code is: ${code}`); 
    return code;
  };







  const { dataProfile, setDataProfile } = MyAppContext();
  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [birthInputValue, setBirthInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const navigate = useNavigate();

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (invalidChars.test(firstInputValue) || invalidChars.test(lastInputValue)) {
      setValidationMessage("Your name contains special characters.");
      return;
    }

    if (passwordInputValue !== confirmPasswordInputValue) {
      setValidationMessage("Passwords do not match.");
      return;
    }

    if (dataProfile.find((element) => element.email === emailInputValue)) {
      setValidationMessage("This email already exists.");
      return;
    }

    if (dataProfile.find((element) => element.lastName === lastInputValue)) {
      setValidationMessage("This last name already exists.");
      return;
    }

    if (passwordInputValue === "" || confirmPasswordInputValue === "") {
      setValidationMessage("You should enter your password.");
      return;
    }

    const newProfile = {
      firstName: firstInputValue,
      lastName: lastInputValue,
      email: emailInputValue,
      birth: birthInputValue,
      password: passwordInputValue,
      confirmPassword: confirmPasswordInputValue,
      post: [],
      generateCode: generateCode(),
      followers: [],
      follows: [],
      groups:[],
      
    };


    setDataProfile([...dataProfile, newProfile]);

    navigate("/verification", {
      state: { notificationMessage: "Registration Successful!" }
    });
    generateCode()
    console.log(newProfile);
    
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[50vw]">
        <img
          className="h-[100vh] w-full flex flex-col items-center rounded-xl shadow-lg"
          src={Images.login}
          alt=""
        />
      </div>
      <div className="w-[50vw] flex flex-col">
        <form
          className="form flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-[40vw]"
          onSubmit={handleSubmit}
        >
          <p className="text-2xl font-bold mb-4">Register</p>
          <p className="text-sm text-gray-500 mb-6">
            Signup now and get full access to our app.
          </p>
          {validationMessage && (
            <p className="text-red-500 mb-4">{validationMessage}</p>
          )}
          <div>
            <div className="flex flex-col md:flex-row gap-4 w-full mb-4">
              <label className="flex flex-col w-full">
                <input
                  value={firstInputValue}
                  onChange={(e) => setFirstInputValue(e.target.value)}
                  type="text"
                  className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="mt-2 text-gray-600">Firstname</span>
              </label>
              <label className="flex flex-col w-full">
                <input
                  value={lastInputValue}
                  onChange={(e) => setLastInputValue(e.target.value)}
                  type="text"
                  className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="mt-2 text-gray-600">Lastname</span>
              </label>
            </div>
            <label className="flex flex-col w-full mb-4">
              <input
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                type="email"
                className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="mt-2 text-gray-600">Email</span>
            </label>
            <label className="flex flex-col w-full mb-4">
              <input
                value={birthInputValue}
                onChange={(e) => setBirthInputValue(e.target.value)}
                type="date"
                className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="flex flex-col w-full mb-4">
              <input
                value={passwordInputValue}
                onChange={(e) => setPasswordInputValue(e.target.value)}
                type="password"
                className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="mt-2 text-gray-600">Password</span>
            </label>
            <label className="flex flex-col w-full mb-4">
              <input
                value={confirmPasswordInputValue}
                onChange={(e) => setConfirmPasswordInputValue(e.target.value)}
                type="password"
                className="input py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="mt-2 text-gray-600">Confirm password</span>
            </label>
            <button
              type="submit"
              className="submit bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
          <p className="signin text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
