import styled from "styled-components";

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin: 3rem auto;
  text-align: center;

  & * {
    margin: 1rem 0;
  }
`;

export default MsgContainer;
