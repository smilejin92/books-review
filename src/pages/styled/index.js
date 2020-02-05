import styled from 'styled-components';
import { Row, Col } from 'antd';

export const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

export const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;

export const StyledSubTitle = styled(StyledTitle)`
  font-size: 27px;
`;

export const StyledUnderline = styled.div`
  width: 200px;
  height: 8px;
  margin: 20px auto 0 auto;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

export const StyledContent = styled(Row).attrs(() => ({
  type: 'flex',
}))`
  width: 800px;
  background-color: #f3f7f8;
  margin: 50px auto 0 auto;
`;
