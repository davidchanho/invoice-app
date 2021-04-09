import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IInvoice } from "../../types";
import { Icon } from "../_shared/icons";
import Status from "../_shared/status";

const Li = styled.li`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 10px -10px hsla(231.72, 37.66%, 45.29%, 10.04%);
  height: 72px;
  width: 730px;
  padding: 39px 29px;
  margin-bottom: 16px;
  border-radius: 8px;
  p {
    margin-right: 29px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
    cursor: pointer;
  }
`;

function InvoiceItem({ id, createdAt, clientName, total, status }: IInvoice) {
  return (
    <Link
      href={{
        pathname: "/[id]",
        query: { id },
      }}
    >
      <Li>
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
          <Icon
            src="/assets/icon-arrow-right.svg"
            alt="right arrow"
            width={4}
            height={8}
          />
        </p>
      </Li>
    </Link>
  );
}

export default InvoiceItem;
