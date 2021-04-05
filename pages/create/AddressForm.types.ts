import { LegacyRef } from "react";
import { DeepMap, FieldError } from "react-hook-form";

export interface AddressFormProps {
  register: LegacyRef<HTMLInputElement>;
  receiver: string;
  errors: DeepMap<Record<string, any>, FieldError>;
}
