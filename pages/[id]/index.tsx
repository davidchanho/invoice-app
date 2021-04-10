import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Template from "../../components/_layout/template";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/_shared/buttons";
import DeleteButton from "../../components/_shared/buttons/DeleteButton";
import Row from "../../components/_shared/row";
import Status from "../../components/_shared/status";

function Invoice() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Template>
      <img
        src="/assets/icon-arrow-left.svg"
        alt="go back"
        width={8.46}
        height={4.23}
      />
      <Link href="/">Go back</Link>
      <Row>
        <Row>
          Status <Status status={status} />
        </Row>{" "}
        <Row>
          <SecondaryButton>Edit</SecondaryButton>
          <DeleteButton />
          <PrimaryButton>Mark as Paid</PrimaryButton>
        </Row>
      </Row>
      <div>
        <div>{id}</div>
      </div>
    </Template>
  );
}

export default Invoice;
