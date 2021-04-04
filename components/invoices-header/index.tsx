import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../app/invoicesSlice";
import { Button } from "../_shared/buttons";
import FilterStatusSelect from "./FilterStatusSelect";

function InvoicesHeader() {
  const { invoices } = useAppSelector(selectInvoices);

  return (
    <div>
      <header>
        <h1>Invoices</h1>
        <p>
          {invoices.length
            ? `There are ${invoices.length} total invoices`
            : "No invoices"}
        </p>
      </header>

      <FilterStatusSelect />

      <Button>
        <img src="assets/icon-plus.svg" /> New Invoice
      </Button>
    </div>
  );
}

export default InvoicesHeader;
