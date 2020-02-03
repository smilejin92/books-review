import React from 'react';
import SigninBg from '../components/SigninBg';
import SigninForm from '../components/SigninForm';
import { connect } from 'react-redux';
import {
  StyledRow,
  StyledCol,
  StyledTitle,
  StyledSubTitle,
  StyledUnderline,
  StyledContent,
} from './styled';

function Signin({ token }) {
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

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps)(Signin);
