import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IItem } from "../../types";

const schema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().positive().integer().required(),
  price: yup.number().positive().required(),
});

const useItemForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm<IItem>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IItem) => console.log(data);

  const values = getValues();
  const total = values.quantity * values.price;

  return { register, handleSubmit, errors, onSubmit, total };
};

export default useItemForm;
