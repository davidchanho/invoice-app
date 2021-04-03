import React from "react";
import styled from "styled-components";
import { IInvoice } from "../../../types";

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

  .status {
    text-transform: capitalize;
    font-weight: 700;
    background-color: ${(props) =>
      props.status === "paid"
        ? props.theme.colors.success
        : props.status === "pending"
        ? props.theme.colors.warning
        : "blue"};
    color: white;
  }
`;

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <Container status={status}>
      <td>{id}</td>
      <td>{createdAt} </td>
      <td>{clientName}</td>
      <td>{total}</td>
      <td className="status">{status}</td>
    </Container>
  );
}

export default InvoiceItem;
