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
        <li>
          #<b>{id}</b>
        </li>
        <li>Due {createdAt} </li>
        <li>{clientName}</li>
        <li>
          <b>£{total ? total : 0}</b>
        </li>
        <li>
          <Status status={status}>{status}</Status>
        </li>
        <li>
          <RightArrow />
        </li>
      </Item>
    </Link>
  );
}

export default InvoiceItem;
