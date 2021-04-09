import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IInvoice } from "./../types/index";
import { RootState } from "./store";

interface IInvoiceState {
  invoices: IInvoice[];
  invoice: IInvoice | {};
  loading: boolean;
  error: string;
}

const initialState: IInvoiceState = {
  invoices: [],
  invoice: {},
  loading: false,
  error: "",
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<IInvoice[]>) => {
      state.loading = false;
      state.invoices = action.payload;
    },
    fetchDetails: (state, action: PayloadAction<IInvoice>) => {
      state.loading = false;
      state.invoice = action.payload;
    },
    create: (state, action: PayloadAction<IInvoice>) => {
      state.loading = false;
      state.invoices = [...state.invoices, action.payload];
    },
    edit: (state, action: PayloadAction<IInvoice>) => {
      const index = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      state.loading = false;
      state.invoices[index] = action.payload;
    },
    remove: (state, action: PayloadAction<IInvoice>) => {
      state.loading = false;
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload.id
      );
    },
    loading: (state) => {
      state.loading = true;
      state.error = "";
    },
    error: (state) => {
      state.loading = false;
      state.error = "error";
    },
  },
});

export const {
  fetch,
  fetchDetails,
  create,
  edit,
  remove,
  loading,
  error,
} = invoicesSlice.actions;
export default invoicesSlice.reducer;

export const selectInvoices = (state: RootState) => state.invoices;

const urlInvoices = "api/invoices";
const urlInvoice = "api/invoice";

export const fetchInvoices = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(urlInvoices);
    dispatch(fetch(data));
  } catch (err) {
    dispatch(error());
  }
};

export const fetchInvoiceDetails = (id: string) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(urlInvoice + id);
    dispatch(fetchDetails(data));
  } catch (err) {
    dispatch(error());
  }
};

export const createInvoice = (invoice: IInvoice) => async (dispatch) => {
  dispatch(loading());
  try {
    axios.post(urlInvoice, { ...invoice, status: "pending" });
    dispatch(create(invoice));
  } catch (err) {
    dispatch(error());
  }
};

export const saveDraft = (invoice: IInvoice) => async (dispatch) => {
  dispatch(loading());
  try {
    axios.post(urlInvoice, { ...invoice, status: "draft" });
    dispatch(create({ ...invoice, status: "draft" }));
  } catch (err) {
    dispatch(error());
  }
};

export const editInvoice = (invoice: IInvoice) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.patch(urlInvoice, invoice);
    dispatch(edit(data));
  } catch (err) {
    dispatch(error());
  }
};

export const removeInvoice = (invoice: IInvoice) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.delete(urlInvoice, {
      data: { id: invoice.id },
    });
    dispatch(remove(data));
  } catch (err) {
    dispatch(error());
  }
};
