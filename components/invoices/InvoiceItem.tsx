import Link from "next/link";
import React from "react";
import { IInvoice } from "../../types";
import Status from "../_shared/status";

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <tr>
      <td>
        #<b>{id}</b>
      </td>
      <td>{createdAt} </td>
      <td>{clientName}</td>
      <td>
        <b>£{total}</b>
      </td>
      <td>
        <Status status={status}>{status}</Status>
      </td>
      <td>
        <Link href={`/${id}`}>
          <img
            src="assets/icon-arrow-right.svg"
            alt="right arrow"
            width={4}
            height={8}
          />
        </Link>
      </td>
    </tr>
  );
}

export default InvoiceItem;
