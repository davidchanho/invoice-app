import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../app/invoicesSlice";
import { Button } from "../_shared/buttons";

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function InvoicesHeader() {
  const { invoices } = useAppSelector(selectInvoices);
  return (
    <Header>
      <header>
        <h1>Invoices</h1>
        <p>
          {invoices.length
            ? `There are ${invoices.length} total invoices`
            : "No invoices"}
        </p>
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
