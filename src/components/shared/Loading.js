import styled, { keyframes } from "styled-components";

const frames = keyframes` 

    from {
        font-size: 3rem;
    }

    to {
        font-size: 3.1rem;
    }

`;

const Loading = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 1rem;
  animation: ${frames} 0.75s linear infinite;
`;

export default Loading;
