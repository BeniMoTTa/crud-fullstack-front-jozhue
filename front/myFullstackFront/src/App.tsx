import AuthProvider from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
