import styled from "styled-components";
import Row from "../_shared/grid/Row";

export const InvoiceHeaderContainer = styled(Row)`
  padding: 0 1.875rem 0 1.875rem;
  h1, p {
    margin: 0;
  }
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.dark};
`;
