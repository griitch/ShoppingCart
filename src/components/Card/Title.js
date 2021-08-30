import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Title = styled(CenteredDiv)`
  height: 100px;
  background-color: ${(props) => props.theme.gray};
  font-weight: 600;
  font-size: 0.9rem;
`;

export default Title;
