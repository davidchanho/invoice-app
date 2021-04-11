import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchInvoices } from "../../app/invoicesSlice";

const useFetchInvoices = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);
};

export default useFetchInvoices;
