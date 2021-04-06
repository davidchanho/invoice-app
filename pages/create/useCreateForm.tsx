import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { createInvoice } from "../../app/invoicesSlice";
import { IInvoice } from "../../types";

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

const useCreateForm = () => {
  const { register, handleSubmit, getValues, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: IInvoice) => {
    dispatch(createInvoice(data));
  };
  const values = getValues();

  return { register, handleSubmit, values, errors, onSubmit };
};

export default useCreateForm;
