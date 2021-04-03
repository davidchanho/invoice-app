import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IInvoice } from "../../types";
import Status from "../status";

interface Props {
  status: string;
}

const Container = styled.tr<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  

  td {
    width: 50%;
    padding: 20px;
  }
`;

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <Container status={status}>
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
    </Container>
  );
}

export default InvoiceItem;
