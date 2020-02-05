import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import {
  StyledCol,
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  SiginButton,
  Underline,
  StyledRow,
  StyledButton,
} from './styled';

function SigninForm({ loading, error, login }) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  // const history = useHistory();

  // login 요청 이후 store의 에러가 set되면
  useEffect(() => {
    if (!error) return;
    else if (error === 'PASSWORD_NOT_MATCH') {
      message.error('Incorrect Password');
    } else if (error === 'USER_NOT_EXIST') {
      message.error('User not found');
    }
  }, [error]);

  // 질문 1. async 함수를 담는 함수에도 async를 붙여야되나?
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push('/');
      // 질문 2. 여기서 push를 안해도되는 이유는
      // SigninForm의 props인 error 혹은 loading이 변경되므로
      // re-render 될때 hoc에서 redirect가 되기 때문인가?
    } catch {}
  }

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
}

export default SigninForm;
