import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 1px 1px 20px 20px;
  padding: 32px;
  height: 370px;
  width: 700px;

  box-shadow: 10px 5px 5px #cccccc;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled(StyledContainer)`
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 16px;
`;
