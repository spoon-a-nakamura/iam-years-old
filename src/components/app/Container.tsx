import { VFC, useEffect, useState, ReactNode } from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  children: ReactNode;
};
const Container: VFC<ContainerProps> = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateWindowHeight = () => {
      const windowHeight = window.innerHeight;
      setHeight(windowHeight);
    };
    updateWindowHeight();
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);
  return (
    <>
      <Root height={height}>{children}</Root>
    </>
  );
};

export default Container;

type RootProps = {
  height: number;
};
const Root = styled.div<RootProps>`
  height: ${({ height }) => height}px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
`;
