import React, { ChangeEvent, useState } from "react";
import { changeStatus } from "../../app/appSlice";
import { useAppDispatch } from "../../app/hooks";

function FilterStatusSelect() {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("ALL");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    setFilter(status);
    dispatch(changeStatus(status));
  };

  return (
    <select
      value={filter}
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
