import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectInvoices } from "../app/invoicesSlice";
import FilterStatusSelect from "../components/invoices/FilterStatusSelect";
import useInvoices from "../components/invoices/useInvoices";
import Template from "../components/_layout/template";
import { PrimaryButton } from "../components/_shared/buttons";

export default function Home() {
  const { renderInvoices } = useInvoices();
  const { invoices } = useAppSelector(selectInvoices);

  return (
    <Template>
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

        <PrimaryButton>
          <img src="assets/icon-plus.svg" /> New Invoice
        </PrimaryButton>
      </div>
      <table>
        <tbody>{renderInvoices()}</tbody>
      </table>
    </Template>
  );
}
