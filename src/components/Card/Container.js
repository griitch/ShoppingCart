import styled from "styled-components";

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.gray};
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  transition: transform 0.3s;

  & img {
    height: 300px;
    width: 260px;
    padding: 0 10px;
    margin-top: 1rem;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 1px 5px ${(props) => props.theme.secondary},
      -1px -1px 5px ${(props) => props.theme.secondary};
  }
`;

export default Container;
