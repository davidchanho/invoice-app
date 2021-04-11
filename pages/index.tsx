import React from "react";
import InvoiceHeader from "../components/invoices/InvoiceHeader";
import useFetchInvoices from "../components/invoices/useFetchInvoices";
import useInvoices from "../components/invoices/useInvoices";
import Template from "../components/_layout/template";

export default function Home() {
  const { renderInvoices } = useInvoices();

  useFetchInvoices();
  
  return (
    <Template>
      <InvoiceHeader />
      <section>{renderInvoices()}</section>
    </Template>
  );
}
