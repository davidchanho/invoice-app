import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../../components/_shared/form";
import FormGroup from "../../components/_shared/form-group";
import FormRow from "../../components/_shared/form-row";
import ItemForm from "./ItemForm";

const schema = yup.object().shape({
  senderStreet: yup.string().required(),
  senderCity: yup.string().required(),
  senderPostCode: yup.string().required(),
  senderCountry: yup.string().required(),
  clientName: yup.string().required(),
  clientEmail: yup.string().required(),
  clientStreet: yup.string().required(),
  clientCity: yup.string().required(),
  clientPostCode: yup.string().required(),
  clientCountry: yup.string().required(),
  paymentDue: yup.date().required(),
  paymentTerms: yup.number().positive().integer().required(),
  description: yup.string().required(),
});

function Create() {
  const { register, handleSubmit, getValues, errors } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log("create", data);
  };
  const values = getValues();

  return (
    <div>
      <h1>New Invoice</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Bill From</h2>
        <FormGroup>
          <label>Sender Street</label>
          <input name="senderStreet" type="text" ref={register} />
          <p>{errors.senderStreet?.message}</p>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <label>City</label>
            <input name="senderCity" type="text" ref={register} />
            <p>{errors.senderCity?.message}</p>
          </FormGroup>
          <FormGroup>
            <label>Post Code</label>
            <input name="senderPostCode" type="text" ref={register} />
            <p>{errors.senderPostCode?.message}</p>
          </FormGroup>
          <FormGroup>
            <label>Country</label>
            <input name="senderCountry" type="text" ref={register} />
            <p>{errors.senderCountry?.message}</p>
          </FormGroup>
        </FormRow>

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
        
        <FormGroup>
          <label>Street Address</label>
          <input name="clientStreet" type="text" ref={register} />
          <p>{errors.clientStreet?.message}</p>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <label>City</label>
            <input name="clientCity" type="text" ref={register} />
            <p>{errors.clientCity?.message}</p>
          </FormGroup>
          <FormGroup>
            <label>Post Code</label>
            <input name="clientPostCode" type="text" ref={register} />
            <p>{errors.clientPostCode?.message}</p>
          </FormGroup>
          <FormGroup>
            <label>Country</label>
            <input name="clientCountry" type="text" ref={register} />
            <p>{errors.clientCountry?.message}</p>
          </FormGroup>
        </FormRow>

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
            <button>Discard</button>
          </div>

          <div>
            <button>Save as Draft</button>
            <input type="submit" value="Save & Send" />
          </div>
        </FormRow>
      </Form>
    </div>
  );
}

export default Create;
