import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { changeStatus, selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Row from "../_shared/row";

const Select = styled.div`
  background-color: inherit;
  margin-right: 0.9375rem;
  position: relative;
  button {
    outline: none;
    border: none;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
    }
  }
  form {
    position: absolute;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

function FilterStatusSelect() {
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
      <button onClick={toggleOpen}>
        Filter by Status{" "}
        <img
          src="assets/icon-arrow-down.svg"
          alt="status menu closed"
          width={8.46}
          height={4.23}
        />
      </button>

      {open && (
        <form className="menu">
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
        </form>
      )}
    </Select>
  );
}

export default FilterStatusSelect;
