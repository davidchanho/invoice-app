import React from "react";
import FormGroup from "../../components/_shared/form-group";
import TextField from "../../components/_shared/text-field";

function Create() {
  return (
    <div>
      <h1>New Invoice</h1>
      <h2>Bill From</h2>
      <form>
        <FormGroup>
          <label>
            Street Address
            <TextField />
          </label>
        </FormGroup>

        <label htmlFor="city">City</label>
        <TextField id="city" />
        <label htmlFor="post-code">Post Code</label>
        <TextField id="post-code" />
        <label htmlFor="country">Country</label>
        <TextField id="country" />
      </form>
    </div>
  );
}

export default Create;
