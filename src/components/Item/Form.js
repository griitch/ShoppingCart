import styled from "styled-components";

const Button = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    margin: 0.5rem 0;
    align-items: center;
    display: flex;
  }
  & div label {
    margin-right: 0.5rem;
  }

  & div input {
    width: 100px;
  }
`;

export default Button;
