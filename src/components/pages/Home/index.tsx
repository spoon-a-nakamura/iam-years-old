import { VFC } from 'react';
import styled from '@emotion/styled';
import Meta from '../../shared/Meta';
import Container from '../../app/Container';
import Main from '../../pages/Home/Main';

const Home: VFC = () => (
  <>
    <Meta
      title="HOW OLD AM I ?"
      description="HOW OLD AM I ?"
      ogType="website"
    />
    <Root>
      <Container>
        <Main />
      </Container>
    </Root>
  </>
);

export default Home;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: url(/assets/images/pages/home/bg.jpg) center / cover no-repeat;
  background: #7a8fb6;
`;
