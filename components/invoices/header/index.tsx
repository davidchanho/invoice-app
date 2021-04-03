import React from "react";
import styled from "styled-components";
import { Button } from "../../_ui/buttons";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function InvoicesHeader() {
  return (
    <Header>
      <header>
        <h1>Invoices</h1>
        <p>No invoices</p>
      </header>
      <select name="Filter by status" id="">
        <option>Paid</option>
        <option>Pending</option>
        <option>Draft</option>
      </select>
      <Button>
        <img src="assets/icon-plus.svg" /> New Invoice
      </Button>
    </Header>
  );
}

export default InvoicesHeader;
