'use client';

import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Better !</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
  height: 50px;
  width: 100%;
`;

const HeaderTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-left: 30px;
`;
