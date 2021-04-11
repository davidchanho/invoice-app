import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../app/invoicesSlice";
import NewInvoiceButton from "../_shared/buttons/NewInvoiceButton";
import Row from "../_shared/grid/Row";
import FilterStatus from "./FilterStatus";
import {
  InvoiceHeaderContainer,
  InvoiceSubTitle,
  InvoiceTitle,
} from "./InvoiceHeader.styles";

function InvoiceHeader() {
  const { invoices } = useAppSelector(selectInvoices);

  const invoiceTotal = invoices.length
    ? `There are ${invoices.length} total invoices`
    : "No invoices";

  return (
    <InvoiceHeaderContainer>
      <div>
        <InvoiceTitle>Invoices</InvoiceTitle>
        <InvoiceSubTitle>{invoiceTotal}</InvoiceSubTitle>
      </div>
      <Row>
        <FilterStatus />
        <NewInvoiceButton />
      </Row>
    </InvoiceHeaderContainer>
  );
}

export default InvoiceHeader;
