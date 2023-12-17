import styled from "styled-components";

export const Form = styled.form`
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border: 1px solid orange;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label``;
export const Button = styled.button`
  width: 120px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 12px;
  &:hover {
    transition: all 0.3s;
    background-color: green;
    color: #fff;
  }
`;
