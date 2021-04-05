import React from "react";
import SideBar from "../sidebar";
import NextHead from "../head";

function Template({ children }) {
  return (
    <div>
      <NextHead />
      <div>
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default Template;
