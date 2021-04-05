import React, { ChangeEvent } from "react";
import { changeStatus, selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

function FilterStatusSelect() {
  const dispatch = useAppDispatch();
  const { filterStatus } = useAppSelector(selectApp);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeStatus(e.target.value));
  };

  return (
    <select
      value={filterStatus}
      onChange={onChange}
      name="Filter by status"
      id="filter-status"
    >
      <option value="all">ALL</option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  );
}

export default FilterStatusSelect;
