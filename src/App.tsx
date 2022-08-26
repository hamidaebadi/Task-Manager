import React from 'react';
import styled from 'styled-components';
import MobileMenu from './components/MobileMenu';
import NavBar from './components/NavBar';

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => {
  return(
    <StyledApp>
      <NavBar />
      <MobileMenu />
    </StyledApp>
  );
}

export default App;
