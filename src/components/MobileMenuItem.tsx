import React from 'react';
import styled from 'styled-components';

const StyledMobileMenuItem = styled.div`
&:hover{
  font-weight: bold;
}
`


const MobileMenuItem = ({itemName} : {itemName: string}) => {
  return (
    <StyledMobileMenuItem>
        {itemName}
    </StyledMobileMenuItem>
  )
}

export default MobileMenuItem
