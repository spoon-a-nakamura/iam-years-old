import { ReactNode, VFC } from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  children: ReactNode;
};
const Container: VFC<ContainerProps> = ({ children }) => (
  <Root>{children}</Root>
);

export default Container;

const Root = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
