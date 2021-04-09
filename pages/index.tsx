import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { selectInvoices } from "../app/invoicesSlice";
import FilterStatusSelect from "../components/invoices/FilterStatusSelect";
import useInvoices from "../components/invoices/useInvoices";
import Template from "../components/_layout/template";
import { PrimaryButton } from "../components/_shared/buttons";
import { Icon } from "../components/_shared/icons";
import Row from "../components/_shared/row";

const Section = styled.header`
  width: 80%;
  margin: 0 auto;
`;

export default function Home() {
  const { renderInvoices } = useInvoices();
  const { invoices } = useAppSelector(selectInvoices);

  return (
    <Template>
      <Section>
        <header>
          <Row>
            <div>
              <h1>Invoices</h1>
              <p>
                {invoices.length
                  ? `There are ${invoices.length} total invoices`
                  : "No invoices"}
              </p>
            </div>
            <Row>
              <FilterStatusSelect />

              <PrimaryButton>
                <Icon
                  src="/assets/icon-plus.svg"
                  alt="add new invoice"
                  width={30}
                  height={30}
                />{" "}
                New Invoice
              </PrimaryButton>
            </Row>
          </Row>
        </header>
        <section>{renderInvoices()}</section>
      </Section>
    </Template>
  );
}
