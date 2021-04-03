import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchInvoices, selectInvoices } from "../../../app/invoicesSlice";
import InvoiceItem from "../invoice-item";

const Table = styled.table`

`;

function Section() {
  const { invoices, loading, error } = useAppSelector(selectInvoices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const renderInvoices = () => {
    if (loading) {
      return <div>loading...</div>;
    }

    if (error) {
      return <div>error</div>;
    }

    if (invoices.length === 0) {
      return <img src="assets/illustration-empty.svg" />;
    }

    return (
      <>
        {invoices?.map((invoice) => {
          return <InvoiceItem key={invoice.id} {...invoice} />;
        })}
      </>
    );
  };

  return <Table>{renderInvoices()}</Table>;
}

export default Section;
