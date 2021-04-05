import React, { ChangeEvent } from "react";
import form from "../../components/_shared/form";
import FormGroup from "../../components/_shared/form-group";
import FormLabel from "../../components/_shared/form-label";
import FormRow from "../../components/_shared/form-row";
import TextField from "../../components/_shared/text-field";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  receiver: string;
}

function AddressForm({ handleChange, receiver }: Props) {
  return (
    <div>
      <FormGroup>
        <FormLabel>Street Address</FormLabel>
        <TextField
          onChange={handleChange}
          name={`${receiver}Street`}
          value={form[`${receiver}Street`]}
          type="text"
        />
      </FormGroup>

      <FormRow>
        <FormGroup>
          <FormLabel>City</FormLabel>
          <TextField
            onChange={handleChange}
            name={`${receiver}City`}
            value={form[`${receiver}City`]}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Post Code</FormLabel>
          <TextField
            onChange={handleChange}
            name={`${receiver}PostCode`}
            value={form[`${receiver}PostCode`]}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Country</FormLabel>
          <TextField
            onChange={handleChange}
            name={`${receiver}Country`}
            value={form[`${receiver}Country`]}
            type="text"
          />
        </FormGroup>
      </FormRow>
    </div>
  );
}

export default AddressForm;
