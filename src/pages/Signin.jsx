import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import SigninBg from '../components/SigninBg';
import SigninForm from '../components/SigninForm';

const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;

const StyledSubTitle = styled(StyledTitle)`
  font-size: 27px;
`;

const StyledUnderline = styled.div`
  width: 200px;
  height: 8px;
  margin: 20px auto 0 auto;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const StyledContent = styled(Row).attrs(() => ({
  type: 'flex',
}))`
  width: 800px;
  background-color: #f3f7f8;
  margin: 50px auto 0 auto;
`;

export default function Signin() {
  const token = localStorage.getItem('token');
  if (token) return <div>이미 로그인되어 있습니다.</div>;

  return (
    <StyledRow>
      <StyledCol>
        <StyledTitle>Books Review</StyledTitle>
        <StyledSubTitle>
          Please Share Your Opinion on Web Development Books.
        </StyledSubTitle>
        <StyledUnderline />
        <StyledContent>
          <SigninBg />
          <SigninForm />
        </StyledContent>
      </StyledCol>
    </StyledRow>
  );
}
