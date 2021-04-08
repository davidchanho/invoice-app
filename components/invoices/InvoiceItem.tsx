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
        query: { id },
      }}
    >
      <li>
        <p>
          #<b>{id}</b>
        </p>
        <p>{createdAt} </p>
        <p>{clientName}</p>
        <p>
          <b>£{total}</b>
        </p>
        <p>
          <Status status={status}>{status}</Status>
        </p>
        <p>
          <Icon
            src="/assets/icon-arrow-right.svg"
            alt="right arrow"
            width={4}
            height={8}
          />
        </p>
      </li>
    </Link>
  );
}

export default InvoiceItem;
