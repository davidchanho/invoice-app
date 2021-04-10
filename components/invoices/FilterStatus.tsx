import React, { ChangeEvent, useState } from "react";
import { changeStatus, selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Row from "../_shared/grid/Row";
import { Button, Form, Select } from "./FilterStatus.styles";

function FilterStatus() {
  const dispatch = useAppDispatch();
  const { filterStatus } = useAppSelector(selectApp);

  const [open, setOpen] = useState(false);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeStatus(e.target.value));
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Select>
      <Button onClick={toggleOpen}>
        Filter by Status{" "}
        <img
          src="assets/icon-arrow-down.svg"
          alt="status menu closed"
          width={8.46}
          height={4.23}
        />
      </Button>

      {open && (
        <Form className="menu">
          <fieldset>
            <Row>
              <input type="checkbox" name="status" value="paid" />
              <label>Paid</label>
            </Row>
            <Row>
              <input type="checkbox" name="status" value="pending" />
              <label>Pending</label>
            </Row>
            <Row>
              <input type="checkbox" name="status" value="draft" />
              <label>Draft</label>
            </Row>
          </fieldset>
        </Form>
      )}
    </Select>
  );
}

export default FilterStatus;
