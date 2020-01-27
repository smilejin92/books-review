import React from 'react';
import styled from 'styled-components';
import { Row, Col, message } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

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
  width: 100%;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  padding-left: 5px;
`;

const SiginButton = styled.button.attrs(({ disabled }) => ({
  disabled,
}))`
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
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      const { token } = response.data;
      setLoading(false);
      localStorage.setItem('token', token);
      history.push('/');
    } catch (e) {
      setLoading(false);
      const { error } = e.response.data;
      if (error === 'PASSWORD_NOT_MATCH') {
        message.error('Incorrect Password');
      } else if (error === 'USER_NOT_EXIST') {
        message.error('User not found');
      } else {
        message.error('Sign in error');
      }
    }
  };

  return (
    <StyledCol>
      <StyledTitle>Log in. Start Searching</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledRow>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput type="email" id="email" ref={emailRef} />
        </StyledRow>
        <StyledRow>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput type="password" id="password" ref={passwordRef} />
        </StyledRow>
        <SiginButton disabled={loading}>Sign In</SiginButton>
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
