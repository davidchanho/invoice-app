import Image from "next/image";
import React from "react";

function InvoiceEmpty() {
  return (
    <div>
      <Image
        src="/assets/illustration-empty.svg"
        alt="no invoices found"
        width={217}
        height={277}
      />
      <h1>There is nothing here</h1>
      <p>Create an invoice by clicking the</p>
      <p>
        <span>New Invoice</span> button and get started
      </p>
    </div>
  );
}

export default InvoiceEmpty;
