import React from 'react';
import SigninBg from '../components/SigninBg';
import SigninFormContainer from '../components/containers/SigninFormContainers';
import withNoAuth from '../hocs/withNoAuth';
import {
  StyledRow,
  StyledCol,
  StyledTitle,
  StyledSubTitle,
  StyledUnderline,
  StyledContent,
} from './styled';

function Signin() {
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
          <SigninFormContainer />
        </StyledContent>
      </StyledCol>
    </StyledRow>
  );
}

export default withNoAuth(Signin);
