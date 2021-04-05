import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
} from "../../components/_shared/buttons";

function InvoiceDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/">go back</Link>
      <header>
        <div>Status</div>{" "}
        <div>
          <SecondaryButton>Edit</SecondaryButton>
          <DangerButton>Delete</DangerButton>
          <PrimaryButton>Mark as Paid</PrimaryButton>
        </div>
      </header>
      <div>
        <div>{id}</div>
      </div>
    </>
  );
}

export default InvoiceDetails;
