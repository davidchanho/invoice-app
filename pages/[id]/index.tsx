import Link from "next/link";
import React from "react";
import { IInvoice } from "../../types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import MarkAsPaidButton from "./MarkAsPaidButton";

function InvoiceDetails({ status }: IInvoice) {
  return (
    <>
      <Link href='/'>go back</Link>
      <header></header>
      <div>
        <div>Status {status}</div>{" "}
        <div>
          <EditButton />
          <DeleteButton />
          <MarkAsPaidButton />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default InvoiceDetails;
