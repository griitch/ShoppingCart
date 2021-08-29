import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
  background-color: ${(props) => props.theme.primary};
  font-size: 1.25rem;

  & a {
    text-decoration: none;
    transition: all 0.3s;
    color: #fff;
  }

  & a:hover {
    color: ${(props) => props.theme.secondary};
  }

  & ul {
    list-style: none;
  }

  & ul li {
    display: inline-block;
    padding: 0 15px;
  }
`;

export default Container;
