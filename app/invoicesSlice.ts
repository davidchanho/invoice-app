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
      const index = state.invoices.findIndex(invoice => invoice.id === action.payload.id)
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

export const { fetch, fetchDetails, create, edit, remove, loading, error } = invoicesSlice.actions;
export default invoicesSlice.reducer;

export const selectInvoices = (state: RootState) => state.invoices;

const url = "api/invoices";

export const fetchInvoices = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(url);
    dispatch(fetch(data));
  } catch (err) {
    dispatch(error());
  }
};

export const fetchInvoiceDetails = (id: string) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(url + id);
    dispatch(fetchDetails(data));
  } catch (err) {
    dispatch(error());
  }
};

export const createInvoice = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(url);
    dispatch(create(data));
  } catch (err) {
    dispatch(error());
  }
};

export const editInvoice = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(url);
    dispatch(edit(data));
  } catch (err) {
    dispatch(error());
  }
};

export const removeInvoice = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(url);
    dispatch(remove(data));
  } catch (err) {
    dispatch(error());
  }
};