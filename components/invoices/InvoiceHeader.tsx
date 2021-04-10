import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../app/invoicesSlice";
import NewInvoiceButton from "../_shared/buttons/NewInvoiceButton";
import Row from "../_shared/row";
import FilterStatusSelect from "./FilterStatusSelect";

function InvoiceHeader() {
  const { invoices } = useAppSelector(selectInvoices);

  return (
    <Row>
      <div>
        <h1>Invoices</h1>
        <p>
          {invoices.length
            ? `There are ${invoices.length} total invoices`
            : "No invoices"}
        </p>
      </div>
      <Row>
        <FilterStatusSelect />
        <NewInvoiceButton />
      </Row>
    </Row>
  );
}

export default InvoiceHeader;
