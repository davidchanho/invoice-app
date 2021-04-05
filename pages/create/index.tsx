import React, { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../components/_shared/form";
import FormGroup from "../../components/_shared/form-group";
import FormLabel from "../../components/_shared/form-label";
import FormRow from "../../components/_shared/form-row";
import TextField from "../../components/_shared/text-field";
import { IInvoice, invoice } from "../../types";
import AddressForm from "./AddressForm";
import ItemForm from "./ItemForm";

function Create() {
  const [form, setForm] = useState<IInvoice>(invoice);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const renderSenderAddress = () => {
    return (
      <>
        <h2>Bill From</h2>
        <AddressForm handleChange={onChange} receiver="sender" />
      </>
    );
  };

  const renderClientAddress = () => {
    return (
      <>
        <h2>Bill To</h2>
        <FormGroup>
          <FormLabel>Client's Name</FormLabel>
          <TextField
            onChange={onChange}
            name="clientName"
            value={form.clientName}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Client's Email</FormLabel>
          <TextField
            onChange={onChange}
            name="clientEmail"
            value={form.clientEmail}
          />
        </FormGroup>

        <AddressForm handleChange={onChange} receiver="client" />
      </>
    );
  };

  const renderItems = () => {
    return (
      <>
        <h2>Item List</h2>
        {form.items.map(() => {
          return <ItemForm />;
        })}
      </>
    );
  };

  const renderOptions = () => {
    return (
      <FormRow>
        <div>
          <button>Discard</button>
        </div>

        <div>
          <button>Save as Draft</button>
          <button>Save & Send</button>
        </div>
      </FormRow>
    );
  };
  return (
    <div>
      <h1>New Invoice</h1>
      <Form onSubmit={onSubmit}>
        {renderSenderAddress()}
        {renderClientAddress()}

        <FormRow>
          <FormGroup>
            <FormLabel>Invoice Date</FormLabel>
            <TextField
              onChange={onChange}
              name="paymentDue"
              value={form.paymentDue}
              type="date"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Payment Terms</FormLabel>
            <TextField
              onChange={onChange}
              name="paymentTerms"
              value={form.paymentTerms}
              type="number"
            />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <FormLabel>Project Description</FormLabel>
          <TextField
            onChange={onChange}
            name="description"
            value={form.description}
            type="text"
          />
        </FormGroup>

        {renderItems()}
        {renderOptions()}
      </Form>
    </div>
  );
}

export default Create;
