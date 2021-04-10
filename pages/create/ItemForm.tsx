import React from "react";
import Form from "../../components/_shared/form";
import FormRow from "../../components/_shared/form/FormRow";
import { Icon } from "../../components/_shared/icons";
import useItemForm from "./useItemForm";

function ItemForm() {
  const { register, handleSubmit, errors, onSubmit, total } = useItemForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <input name="name" type="text" ref={register} />
        <p>{errors.name?.message}</p>
        <input name="quantity" type="number" ref={register} />
        <p>{errors.quantity?.message}</p>
        <input name="price" type="number" ref={register} />
        <p>{errors.price?.message}</p>
        <p>{total}</p>
        <Icon
          src="/assets/icon-delete.svg"
          alt="delete item"
          width={12}
          height={16}
        />
      </FormRow>
    </Form>
  );
}

export default ItemForm;
