import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IInvoice } from "../../types";

const schema = yup.object().shape({
  senderAddress: yup.string().required(),
  senderCity: yup.string().required(),
  senderPostCost: yup.string().required(),
  senderCountry: yup.string().required(),
  clientName: yup.string().required(),
  clientEmail: yup.string().required(),
  clientAddress: yup.string().required(),
  clientCity: yup.string().required(),
  clientPostCost: yup.string().required(),
  clientCountry: yup.string().required(),
  sendName: yup.string().required(),
  paymentDue: yup.date().required(),
  paymentTerms: yup.number().positive().integer().required(),
  description: yup.string().required(),
});

const useCreateForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IInvoice) => console.log(data);
  const values = getValues();

  return { register, handleSubmit, values, errors, onSubmit };
};

export default useCreateForm;
