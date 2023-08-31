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
  width: 1280px;
  margin: 0 auto;
`;
