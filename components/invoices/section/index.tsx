import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchInvoices, selectInvoices } from "../../../app/invoicesSlice";
import InvoiceItem from "../../invoice-item";

function Section() {
  const { invoices, loading, error } = useAppSelector(selectInvoices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const renderInvoices = () => {
    if (loading) {
      return <>loading...</>;
    }

    if (error) {
      return <>error</>;
    }

    if (invoices.length === 0) {
      return <img src="assets/illustration-empty.svg" />;
    }

    return (
      <table>
        <tbody>
          {invoices?.map((invoice) => {
            return <InvoiceItem key={invoice.id} {...invoice} />;
          })}
        </tbody>
      </table>
    );
  };

  return <div>{renderInvoices()}</div>;
}

export default Section;
