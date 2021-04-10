import Image from "next/image";
import React, { useEffect } from "react";
import { selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchInvoices, selectInvoices } from "../../app/invoicesSlice";
import InvoiceItem from "./InvoiceItem";
import { List } from "./Invoices.styles";
import InvoiceSkeleton from "./InvoiceSkeleton";

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
      return <InvoiceSkeleton />;
    }

    if (error) {
      return (
        <Image
          src="/assets/illustration-empty.svg"
          alt="no invoices found"
          width={217}
          height={277}
        />
      );
    }

    return (
      <List>
        {filteredInvoices?.map((invoice) => {
          return <InvoiceItem key={invoice.id} {...invoice} />;
        })}
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </List>
    );
  };

  return { renderInvoices };
};

export default useInvoices;
