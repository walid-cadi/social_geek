import React from "react";
import Navbar from "../layouts/navbar";
import SideBar from "../layouts/dashboard";
import { GroupPage } from "./groups/Group";
const Group = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <SideBar />
          <GroupPage />
        </div>
      </div>
    </>
  );
};

export default Group;
