import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setLoading,
  endLoading,
  setError,
  clearError,
  setToken,
} from '../actions';
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

function SigninForm({
  loading,
  setLoading,
  endLoading,
  setError,
  clearError,
  setToken,
}) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      clearError();
      setLoading();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      const { token } = response.data;
      endLoading();
      localStorage.setItem('token', token);
      setToken(token);
      history.push('/');
    } catch (e) {
      endLoading();
      const { error } = e.response.data;
      setError(error);
      if (error === 'PASSWORD_NOT_MATCH') {
        message.error('Incorrect Password');
      } else if (error === 'USER_NOT_EXIST') {
        message.error('User not found');
      } else {
        message.error('Sign in error');
      }
    }
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

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => {
      dispatch(setLoading());
    },
    endLoading: () => {
      dispatch(endLoading());
    },
    setError: error => {
      dispatch(setError(error));
    },
    clearError: () => {
      dispatch(clearError());
    },
    setToken: token => {
      dispatch(setToken(token));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
