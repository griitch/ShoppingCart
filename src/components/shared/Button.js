import styled from "styled-components";

const Button = styled.button`
  font-size: 1.25rem;
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: none;
  transition: color 0.25s;
  color: white;

  &:hover {
    color: ${(props) =>
      props.primary ? props.theme.secondary : props.theme.primary};
    cursor: pointer;
  }
`;

export default Button;
