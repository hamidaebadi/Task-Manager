import React from 'react';
import styled from 'styled-components';
import MobileMenuItem from './MobileMenuItem';

const StyledMobileMenu = styled.div`
    display: none;
    
    @media screen and (max-width: 600px){
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background-color: white;
        color: black;
        padding: 20px 0 20px 0;
    }
    
`
const MobileMenu = () => {
  return (
    <StyledMobileMenu>
        <MobileMenuItem itemName='All tasks'/>
        <MobileMenuItem itemName='Done'/>
        <MobileMenuItem itemName='Add New'/>
        <MobileMenuItem itemName='Not Yet'/>
        <MobileMenuItem itemName='Profile'/>
    </StyledMobileMenu>
  )
}

export default MobileMenu
