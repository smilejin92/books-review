import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px 30px;
  height: 400px;
  justify-content: space-around;
`;

const StyledLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  display: block;
  font-weight: bold;
  padding-bottom: 8px;

  &::after {
    content: '*';
    color: red;
  }
`;

const StyledInput = styled.input.attrs(({ id, type }) => ({
  id,
  type,
}))`
  display: block;
  width: 100%;
  padding-left: 5px;
`;

const StyledLabelInput = ({ id, type, children }) => (
  <Row>
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
    <StyledInput id={id} type={type} />
  </Row>
);

const SiginButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #003366;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

const Underline = styled.div`
  height: 1px;
  background: #ccc;
`;

const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  justify: 'space-between',
}))``;

const StyledButton = styled.button`
  height: 30px;
  color: #003366;
  background: transparent;
  padding: 0 10px;
  border: 2px solid #003366;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

const SigninForm = () => {
  return (
    <StyledCol>
      <StyledTitle>Log in. Start Searching</StyledTitle>
      <StyledForm onSubmit={e => e.preventDefault()}>
        <StyledLabelInput id="email" type="email">
          Email
        </StyledLabelInput>
        <StyledLabelInput id="password" type="password">
          Password
        </StyledLabelInput>
        <SiginButton>Sign In</SiginButton>
        <Underline />
        <StyledRow>
          <span>Need to create an account?</span>
          <StyledButton>SIGN UP</StyledButton>
        </StyledRow>
        <StyledRow>
          <span>Forgot your password?</span>
          <StyledButton>RECOVERY</StyledButton>
        </StyledRow>
      </StyledForm>
    </StyledCol>
  );
};

export default SigninForm;
