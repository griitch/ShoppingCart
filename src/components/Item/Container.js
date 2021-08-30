import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Container = styled(CenteredDiv)`
  width: 85%;
  margin: 3rem auto;
  justify-content: space-between;

  & img {
    width: 400px;
    height: 450px;
    padding: 2rem;
  }

  & label {
    font-weight: 900;
    font-size: 1.25rem;
    color: ${(props) => props.theme.secondary};
  }

  @media (max-width: 700px) {
    width: 90%;
    flex-direction: column;
    & img {
      width: 300;
      height: 350px;
    }
  }
`;

export default Container;
