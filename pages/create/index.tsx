import React from "react";
import Template from "../../components/_layout/template";
import Form from "../../components/_shared/form";
import FormGroup from "../../components/_shared/form-group";
import FormRow from "../../components/_shared/form-row";
import AddressForm from "./AddressForm";
import ItemForm from "./ItemForm";
import useCreateForm from "./useCreateForm";

function Create() {
  const {
    register,
    handleSubmit,
    values,
    errors,
    onSubmit,
  } = useCreateForm();

  return (
    <Template>
      <h1>New Invoice</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Bill From</h2>
        <AddressForm register={register} receiver="sender" errors={errors} />

        <h2>Bill To</h2>
        <FormGroup>
          <label>Client's Name</label>
          <input name="clientName" type="text" ref={register} />
          <p>{errors.clientName?.message}</p>
        </FormGroup>

        <FormGroup>
          <label>Client's Email</label>
          <input name="clientEmail" type="email" ref={register} />
          <p>{errors.clientEmail?.message}</p>
        </FormGroup>

        <AddressForm register={register} receiver="client" errors={errors} />

        <FormRow>
          <FormGroup>
            <label>Invoice Date</label>
            <input name="paymentDue" type="text" ref={register} />
            <p>{errors.paymentDue?.message}</p>
          </FormGroup>
          <FormGroup>
            <label>Payment Terms</label>
            <input name="paymentTerms" type="number" ref={register} />
            <p>{errors.paymentTerms?.message}</p>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <label>Project Description</label>
          <input name="description" type="text" ref={register} />
          <p>{errors.description?.message}</p>
        </FormGroup>

        <>
          <h2>Item List</h2>
          {values.items?.map(() => {
            return <ItemForm />;
          })}
        </>

        <FormRow>
          <div>
            <input type="reset" value="Discard" />
          </div>

          <div>
            <input type="button" value="Save as Draft" />
            <input type="submit" value="Save & Send" />
          </div>
        </FormRow>
      </Form>
    </Template>
  );
}

export default Create;
