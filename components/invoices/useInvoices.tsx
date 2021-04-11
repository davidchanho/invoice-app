import React from "react";
import { selectApp } from "../../app/appSlice";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../app/invoicesSlice";
import InvoiceEmpty from "./InvoiceEmpty";
import InvoiceItem from "./InvoiceItem";
import { List } from "./Invoices.styles";
import InvoiceSkeleton from "./InvoiceSkeleton";

const useInvoices = () => {
  const { invoices, loading, error } = useAppSelector(selectInvoices);
  const { filterStatus } = useAppSelector(selectApp);
  const filteredInvoices =
    filterStatus === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filterStatus);

  const renderInvoices = () => {
    if (loading) {
      return <InvoiceSkeleton />;
    }

    if (error) {
      return <InvoiceEmpty />;
    }

    return (
      <List>
        {filteredInvoices?.map((invoice) => {
          return <InvoiceItem key={invoice.id} {...invoice} />;
        })}
      </List>
    );
  };

  return { renderInvoices };
};

export default useInvoices;
