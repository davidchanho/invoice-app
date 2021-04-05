import React, { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../components/_shared/form";
import FormRow from "../../components/_shared/form-row";
import TextField from "../../components/_shared/text-field";
import { IItem, item } from "../../types";

function ItemForm() {
  const [form, setForm] = useState<IItem>(item);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormRow>
        <TextField
          onChange={onChange}
          name="name"
          value={form.name}
          type="text"
        />
        <TextField
          onChange={onChange}
          name="quantity"
          value={form.quantity}
          type="number"
        />
        <TextField
          onChange={onChange}
          name="price"
          value={form.price}
          type="number"
        />
        <p>{form.quantity * form.price}</p>
        <img
          src="assets/icon-delete.svg"
          alt="delete item"
          width={12.44}
          height={16}
        />
      </FormRow>
    </Form>
  );
}

export default ItemForm;
