import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";

const Verification = () => {
  const [inputCode, setInputCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState(""); 
  const navigate = useNavigate();

  const { dataProfile, setDataProfile } = MyAppContext();
  const newProfile = dataProfile[dataProfile?.length - 1 ]
if (newProfile) {
  setDataProfile(newProfile)
  console.log(newProfile);
  console.log(dataProfile?.length -1);
}




  const handleVerify = (e) => {
    e.preventDefault();
    if (inputCode === newProfile.generateCode) {
      setNotificationMessage("Registration Successful!");
      setNotificationType("success");
      showNotification("Registration Successful!");
      navigate("/login");
    } else {
      setNotificationMessage("Code does not match");
      setNotificationType("error");
      showNotification("Code does not match", "error");
    }
  };

  const handleResend = () => {
    generatedCode(); 
    setNotificationMessage(`A new code has been sent to your mobile number: ${newProfile.generateCode}`);
    setNotificationType("info");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputCode((prevCode) => prevCode + value);
  };

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

    

    
  };

  return (
    <>
      {notificationMessage && (
        <div
          role="alert"
          className={`p-2 rounded-lg flex items-center transition duration-300 ease-in-out ${
            notificationType === "success"
              ? "bg-green-100 border-green-500 text-green-900"
              : notificationType === "error"
              ? "bg-red-100 border-red-500 text-red-900"
              : "bg-blue-100 border-blue-500 text-blue-900"
          }`}
        >
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className={`h-5 w-5 flex-shrink-0 mr-2 ${
              notificationType === "success"
                ? "text-green-600"
                : notificationType === "error"
                ? "text-red-600"
                : "text-blue-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <p className="text-xs font-semibold">{notificationMessage}</p>
        </div>
      )}

      <div className="flex items-center justify-center mt-10 flex-col">
        <div className="otp-Form flex flex-col items-center">
          <span className="mainHeading">Enter OTP</span>
          <p className="otpSubheading">
            We have sent a verification code to your mobile number
          </p>
          <div className="max-w-md mx-auto border mt-20">
  <form className="bg-white shadow-md rounded px-8 py-6">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
        OTP:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="otp"
        type="text"
        placeholder="Enter OTP"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Verify
      </button>
      <Link
        className="inline-block align-baseline font-bold text-sm bg-blue-500 hover:text-blue-800"
        href="#"
      >
        Resend OTP
      </Link>
    </div>
  </form>
</div>

         
   
         


         
        </div>
      </div>
    </>
  );
};

export default Verification;
