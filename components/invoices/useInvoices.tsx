import Image from "next/image";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchInvoices, selectInvoices } from "../../app/invoicesSlice";
import InvoiceItem from "./InvoiceItem";

const List = styled.ul`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      width: 20%;
    }
  }
`;

const SkeletonItem = styled(Skeleton)`
  height: 72px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
`;

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
      return (
        <List>
          <SkeletonItem count={7} />
        </List>
      );
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
      </List>
    );
  };

  return { renderInvoices };
};

export default useInvoices;
