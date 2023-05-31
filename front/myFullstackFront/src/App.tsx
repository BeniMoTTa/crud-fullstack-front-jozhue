import { ToastContainer } from "react-toastify";
import AuthProvider from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import AxiosInterceptor from "./AxiosInterceptor";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  );
};

export default App;
