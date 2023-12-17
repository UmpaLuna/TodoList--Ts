import styled from "styled-components";

export const Layout = styled.div`
  max-width: ${({ theme: { width }})  => width.max};
  min-width: ${({ theme: { width } }) => width.min};
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
  min-height: 100vh;
  margin-top: 30px;
`
