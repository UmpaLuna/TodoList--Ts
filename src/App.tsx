import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled-component/GlobalStyle";
import theme from "./styled-component/theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoPage from "./page/TodoPage";

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle/>
      <QueryClientProvider client={queryClient}>
      <TodoPage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
