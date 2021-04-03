import React from "react";
import SideBar from "../../sidebar";
import { Main } from "./Template.styles";

function Template({ children }) {
  return (
    <div>
      <Main>
        <SideBar />
        {children}
      </Main>
    </div>
  );
}

export default Template;
