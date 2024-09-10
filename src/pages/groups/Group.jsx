import React from "react";
import { MyAppContext } from "../../context";
import { useLocation, useParams } from "react-router-dom";
import { Images } from "../../constant";
import { PostGroup } from "../components/PostGroup";

export const GroupPage = () => {
  const { groups, setGroups } = MyAppContext();
  const { userData, setUserData } = MyAppContext();
  const location = useLocation();

  const { isadmin } = location.state || {};

  //console.log(groups);
  const { grpName } = useParams();

  const findgroup = groups.find((e) => e.grpName == grpName);
  const group = Array(findgroup);
  console.log(findgroup);

  return (
    <>
      <div className="w-[90vw] sm:w-[80vw] mt-5 min-h-screen pt-10 flex flex-col items-center gap-5">
  {findgroup && (
    <>
      <div className="w-[98%] bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src={findgroup.grpCover}
            alt="Mountain"
          />
        </div>
        <div className="w-24 sm:w-32 h-24 sm:h-32 relative mt-10 sm:mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center w-full h-full"
            src={findgroup.profil}
            alt="Woman looking front"
          />
        </div>
        <div className="pb-4 px-2 flex justify-between">
          <div>
            <h1 className="text-md sm:text-lg font-bold">{findgroup.grpName}</h1>
            <h1 className="text-sm sm:text-md font-semibold text-gray-600">
              {findgroup.Fname} {findgroup.Lname}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-x-2 sm:gap-x-5 px-2 sm:px-5">
        <div className="w-full sm:w-[70%]">
          <PostGroup isadmin={isadmin} findgroup={findgroup} />
        </div>
      </div>
    </>
  )}
</div>

    </>
  );
};
