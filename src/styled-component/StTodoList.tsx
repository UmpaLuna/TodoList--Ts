import styled from "styled-components";

export const Container = styled.div``;
export const Section = styled.section``;
export const Title = styled.h2`
  font-weight: bold;
  margin: 24px 0;
  font-size: 32px;
`;

export const Card = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid #228e38b7;
  border-radius: 12px;
`;

export const Content = styled.div`
  padding: 20px;
`;
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
const Button = styled.div`
  width: 100px;
  height: 30px;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background-color: #fff;
    color: #000;
  }
`;

export const IsDoneButton = styled(Button)`
  background-color: green;
  color: #fff;

  &:hover {
    background-color: red;
  }
`;
export const DeleteButton = styled(Button)`
  background-color: red;
  color: #fff;
  &:hover {
    background-color: green;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
