import styled from 'styled-components';

export const FormContainer = styled.form`
  border: solid #eeeeee 2px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 25px;
  padding: 15px;
  background-color: #eeeeee;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;

  svg {
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
