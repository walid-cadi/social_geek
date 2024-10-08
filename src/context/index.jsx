import { createContext, useContext, useState } from "react";

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
  const [dataProfile, setDataProfile] = useState([{bio
    : 
    "",
    biography
    : 
    "",
    birth
    : 
    "1974-10-27",
    confirmPassword
    : 
    " ",
    cover
    : 
    "",
    email
    : 
    "vyqy@mailinator.com",
    firstName
    : 
    "Exercitationem qui e",
    firstTime
    : 
    false,
    followers
    : 
    [],
    follows
    : 
    [],
    gendre
    : 
    "Male",
    generateCode
    : 
    "2090",
    groups
    : 
    [],
    lastName
    : 
    "Aperiam minus illo b",
    password
    : 
    "password",
    post
    : 
    [],
    profile
    : 
    " "}]);
  const [generatedCode, setGeneratedCode] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");
  
  const [userData, setUserData] = useState(null);
  
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
    });

    notification.addEventListener("click", function () {
      window.open("https://www.example.com");
    });

    setTimeout(() => notification.close(), 5000);
  };

  const generateCode = () => {
    let code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);

    console.log("Generated Code:", code);
    showNotification(`Your verification code is: ${code}`);
    return code;
  };

  const test = (message) => {
    setUserData(message);
  };

  const [groups, setGroups] = useState([]);

  const all = {
    setDataProfile,
    dataProfile,
    generateCode,
    userData,
    setUserData,
    test,
    groups,
    setGroups,
  };

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};

export const MyAppContext = () => useContext(Mycontext);
