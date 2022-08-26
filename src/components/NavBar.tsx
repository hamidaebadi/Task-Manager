import React from 'react';
import styled from 'styled-components';

const StyledMobileNavBar = styled.div`
    width: 100%;
    background-color: white;
    color: black;
    padding: 1rem;
    text-align: center;
`
const NavBar = () => {
  return (
    <StyledMobileNavBar>
        Task Manager
    </StyledMobileNavBar>
  )
}

export default NavBar
