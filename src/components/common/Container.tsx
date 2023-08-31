import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <ConatainerLayout>{children}</ConatainerLayout>;
};

export default Container;

const ConatainerLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767px) {
    max-width: 350px;
  }
`;
