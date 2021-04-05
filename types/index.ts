export interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const item = {
  name: "",
  quantity: 0,
  price: 0,
  total: 0,
}

export interface IInvoice {
  id?: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;

  senderStreet: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;

  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;

  items: IItem[];
  total: number;
}

export const invoice: IInvoice = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 0,
  clientName: "",
  clientEmail: "",
  status: "",
  senderStreet: "",
  senderCity: "",
  senderPostCode: "",
  senderCountry: "",
  clientStreet: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  items: [],
  total: 0,
};
