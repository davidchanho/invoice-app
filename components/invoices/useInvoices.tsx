import React, { useEffect } from "react";
import { selectApp } from "../../app/appSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectInvoices, fetchInvoices } from "../../app/invoicesSlice";
import InvoiceItem from "./InvoiceItem";

const useInvoices = () => {
  const { invoices, loading, error } = useAppSelector(selectInvoices);
  const dispatch = useAppDispatch();
  const { filterStatus } = useAppSelector(selectApp);
  const filteredInvoices =
    filterStatus === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filterStatus);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const renderInvoices = () => {
    if (loading) {
      return <div>loading...</div>;
    }

    if (error) {
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
        {filteredInvoices?.map((invoice) => {
          return <InvoiceItem key={invoice.id} {...invoice} />;
        })}
      </>
    );
  };
  
  return { renderInvoices };
};

export default useInvoices;
