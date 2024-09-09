import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";

const UpDateProfile = () => {
  const { dataProfile, setDataProfile, userData } = MyAppContext();
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const navigate = useNavigate();

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let findUser =  dataProfile.findIndex(profile => profile.email === userData.email && profile.password === userData.password);
    const  newTab = [...dataProfile]
    
    newTab[findUser].profile= profileImage
    newTab[findUser].cover= coverImage
    newTab[findUser].firstTime=  true 


setDataProfile(newTab)
  
    console.log("data profile:", dataProfile);

    navigate("/home");
  };

  return (
    <div>
      <section className="py-10 my-auto dark:bg-white">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>
              <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
                Update Profile
              </h2>
              <div>
                {/* Cover Image */}
                <div
                  className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center"
                  style={{
                    backgroundImage: `url(${coverImage || "defaultCoverImageURL"})`,
                  }}
                >
                  {/* Profile Image */}
                  <div
                    className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${profileImage || "defaultProfileImageURL"})`,
                    }}
                  >
                    <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                      <input
                        type="file"
                        name="profile"
                        id="upload_profile"
                        hidden
                        onChange={handleProfileImageChange}
                      />
                      <label htmlFor="upload_profile">
                        {/* Add profile upload SVG icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <circle
                            cx="8.5"
                            cy="7"
                            r="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 8v6M23 11h-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <input
                      type="file"
                      name="cover"
                      id="upload_cover"
                      hidden
                      onChange={handleCoverImageChange}
                    />
                    <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                      <label
                        htmlFor="upload_cover"
                        className="inline-flex items-center gap-1 cursor-pointer"
                      >
                        Upload Cover
                        {/* Add cover upload SVG icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <circle
                            cx="8.5"
                            cy="7"
                            r="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 8v6M23 11h-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                  Upload Profile and Cover Image
                </h2>

                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button onClick={handleSubmit} type="submit" className="w-full p-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpDateProfile;
