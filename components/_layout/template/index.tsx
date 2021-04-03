import React from "react";
import SideBar from "../../sidebar";
import NextHead from "../head";
import Main from "./Template.styles";

function Template({ children }) {
  return (
    <div>
      <NextHead />
      <Main>
        <SideBar />
        {children}
      </Main>
    </div>
  );
}

export default Template;
