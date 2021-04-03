import React from "react";
import styled from "styled-components";
import InvoicesHeader from "../invoices-header";
import Section from "./section";

const Page = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

function Invoices() {
  return (
    <Page>
      <InvoicesHeader />
      <Section />
    </Page>
  );
}

export default Invoices;
