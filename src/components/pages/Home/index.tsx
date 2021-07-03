import { VFC } from 'react';
// import styled from '@emotion/styled';
import Meta from '../../shared/Meta';
import Container from '../../app/Container';
import Main from '../../pages/Home/Main';

const Home: VFC = () => {
  return (
    <>
      <Meta
        title="I am hogehoge years old."
        description="I am hogehoge years old."
        ogType="website"
      />
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default Home;
