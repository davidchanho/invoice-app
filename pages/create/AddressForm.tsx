import React from "react";
import FormGroup from "../../components/_shared/form/FormGroup";
import FormRow from "../../components/_shared/form/FormRow";
import { AddressFormProps } from "./AddressForm.types";

function AddressForm({ register, receiver, errors }: AddressFormProps) {
  return (
    <>
      <FormGroup>
        <label>Street Address</label>
        <input name={`${receiver}Street`} type="text" ref={register} />
        <p>{errors[`${receiver}Street`]?.message}</p>
      </FormGroup>

      <FormRow>
        <FormGroup>
          <label>City</label>
          <input name={`${receiver}City`} type="text" ref={register} />
          <p>{errors[`${receiver}City`]?.message}</p>
        </FormGroup>
        <FormGroup>
          <label>Post Code</label>
          <input name={`${receiver}PostCode`} type="text" ref={register} />
          <p>{errors[`${receiver}PostCode`]?.message}</p>
        </FormGroup>
        <FormGroup>
          <label>Country</label>
          <input name={`${receiver}Country`} type="text" ref={register} />
          <p>{errors[`${receiver}Country`]?.message}</p>
        </FormGroup>
      </FormRow>
    </>
  );
}

export default AddressForm;
