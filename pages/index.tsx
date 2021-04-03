import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Invoices from "../components/invoices";
import SideBar from "../components/sidebar";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Invoices App</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      <Main>
        <SideBar />
        <Invoices />
      </Main>
    </div>
  );
}
