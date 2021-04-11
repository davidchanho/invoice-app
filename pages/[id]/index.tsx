import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { selectApp } from "../../app/appSlice";
import { useAppSelector } from "../../app/hooks";
import Prompt from "../../components/prompt";
import Template from "../../components/_layout/template";
import { PrimaryButton } from "../../components/_shared/buttons";
import EditButton from "../../components/_shared/buttons/EditButton";
import Row from "../../components/_shared/grid/Row";
import LeftArrowIcon from "../../components/_shared/icons/LeftArrowIcon";
import Status from "../../components/_shared/status";

function Invoice() {
  const router = useRouter();
  const { id } = router.query;
 const { isPromptOpen, drawerOpen } = useAppSelector(selectApp);
 
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
            <Prompt />
            <PrimaryButton disabled={(isPromptOpen || drawerOpen)}>
              Mark as Paid
            </PrimaryButton>
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
