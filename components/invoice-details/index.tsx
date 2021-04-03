import React from "react";
import { IInvoice } from "../../types";

function InvoiceDetails({ status }: IInvoice) {
  return (
    <div>
      <header>go back</header>
      <div>
        <div>Status {status}</div>{" "}
        <div>
          <button>edit</button>
          <button>delete</button>
          <button>mark as paid</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default InvoiceDetails;
