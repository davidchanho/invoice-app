import React from "react";
import Invoices from "../components/invoices";
import InvoicesHeader from "../components/invoices-header";
import Template from "../components/_layout/template";

export default function Home() {
  return (
    <Template>
      <InvoicesHeader />
      <Invoices />
    </Template>
  );
}
