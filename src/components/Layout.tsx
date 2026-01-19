import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const Layout = () => (
  <Container>
    <Header />
    <Main role="main">
      <Outlet />
    </Main>
    <Footer />
  </Container>
);

export default Layout;