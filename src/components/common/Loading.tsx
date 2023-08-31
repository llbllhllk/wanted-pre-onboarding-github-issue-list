import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
`;

const LoadingSpinner = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 7px solid aqua;
  border-radius: 50%;
  border-top-color: blue;
  animation: ${spin} 1s linear infinite;

  @media screen and (max-width: 1023px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;

export default Loading;
