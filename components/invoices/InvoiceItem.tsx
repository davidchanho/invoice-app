import Link from "next/link";
import React from "react";
import { IInvoice } from "../../types";
import { Icon } from "../_shared/icons";
import Status from "../_shared/status";

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <Link
      href={{
        pathname: "/[id]",
        query: { id, createdAt, clientName, total, status },
      }}
    >
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
          <Icon
            src="/assets/icon-arrow-right.svg"
            alt="right arrow"
            width={4}
            height={8}
          />
        </td>
      </tr>
    </Link>
  );
}

export default InvoiceItem;
