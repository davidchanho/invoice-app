import React, { useEffect } from "react";
import { selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchInvoices, selectInvoices } from "../../app/invoicesSlice";
import InvoiceItem from "../invoice-item";

function Invoices() {
  const { invoices, loading, error } = useAppSelector(selectInvoices);
  const dispatch = useAppDispatch();
  const { filterStatus } = useAppSelector(selectApp);
  const filteredInvoices = invoices.filter(
    (invoice) => invoice.status === filterStatus
  );

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
      return (
        <img
          src="assets/illustration-empty.svg"
          alt="no invoices found"
          width={217}
          height={277}
        />
      );
    }

    return (
      <>
        {filterStatus === "all"
          ? invoices?.map((invoice) => {
              return <InvoiceItem key={invoice.id} {...invoice} />;
            })
          : filteredInvoices?.map((invoice) => {
              return <InvoiceItem key={invoice.id} {...invoice} />;
            })}
      </>
    );
  };

  return (
    <table>
      <tbody>{renderInvoices()}</tbody>
    </table>
  );
}

export default Invoices;
