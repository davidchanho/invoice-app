import Link from "next/link";
import React from "react";
import { IInvoice } from "../../types";
import RightArrow from "../_shared/icons/RightArrowIcon";
import Status from "../_shared/status";
import Item from "./InvoiceItem.styles";

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <Link
      href={{
        pathname: "/[id]",
        query: { id },
      }}
    >
      <Item>
        <p>
          #<b>{id}</b>
        </p>
        <p>Due {createdAt} </p>
        <p>{clientName}</p>
        <p>
          <b>£{total ? total : 0}</b>
        </p>
        <p>
          <Status status={status}>{status}</Status>
        </p>
        <p>
          <RightArrow />
        </p>
      </Item>
    </Link>
  );
}

export default InvoiceItem;
