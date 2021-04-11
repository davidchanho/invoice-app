import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Template from "../../components/_layout/template";
import { PrimaryButton } from "../../components/_shared/buttons";
import DeleteButton from "../../components/_shared/buttons/DeleteButton";
import EditButton from "../../components/_shared/buttons/EditButton";
import Row from "../../components/_shared/grid/Row";
import LeftArrowIcon from "../../components/_shared/icons/LeftArrowIcon";
import Status from "../../components/_shared/status";

function Invoice() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Template>
      <div>
        <LeftArrowIcon width={8.46} height={4.23} />
        <Link href="/">Go back</Link>
        <Row>
          <Row>
            Status <Status status={status} />
          </Row>{" "}
          <Row>
            <EditButton />
            <DeleteButton />
            <PrimaryButton>Mark as Paid</PrimaryButton>
          </Row>
        </Row>
        <div>
          <div>{id}</div>
        </div>
      </div>
    </Template>
  );
}

export default Invoice;
