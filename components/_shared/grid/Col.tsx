import styled from "styled-components";
import Row from "./Row";

const Col = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export default Col;
