import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import bgSignin from './images/bg_signin.png';

const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))``;

const StyledImg = styled.img`
  width: 100%;
`;

const SigninBg = () => (
  <StyledCol>
    <StyledImg src={bgSignin} alt="Signin" />
  </StyledCol>
);

export default SigninBg;
