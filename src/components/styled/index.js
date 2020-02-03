import styled from 'styled-components';
import { Row, Col } from 'antd';

export const StyledCol = styled(Col).attrs(() => ({
  span: 12,
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px 30px;
  height: 400px;
  justify-content: space-around;
`;

export const StyledLabel = styled.label.attrs(({ htmlFor }) => ({
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

export const StyledInput = styled.input.attrs(({ id, type }) => ({
  id,
  type,
}))`
  width: 100%;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  padding-left: 5px;
`;

export const SiginButton = styled.button.attrs(({ disabled }) => ({
  disabled,
}))`
  width: 150px;
  height: 50px;
  background-color: #003366;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Underline = styled.div`
  height: 1px;
  background: #ccc;
`;

export const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  justify: 'space-between',
}))``;

export const StyledButton = styled.button`
  height: 30px;
  color: #003366;
  background: transparent;
  padding: 0 10px;
  border: 2px solid #003366;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
