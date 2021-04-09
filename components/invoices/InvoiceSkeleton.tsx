import React from "react";
import { List } from "./Invoices.styles";
import InvoiceSkeletonItem from "./InvoiceSkeleton.styles";

function InvoiceSkeleton() {
  return (
    <List>
      <InvoiceSkeletonItem count={7} />
    </List>
  );
}

export default InvoiceSkeleton;
