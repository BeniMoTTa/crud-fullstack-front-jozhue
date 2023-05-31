import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import axios from "axios";
import ModalErrorAuthenticate from "../pages/Dashboard/components/Modals/Error";

interface AxiosInterceptorProps {
  children: ReactNode;
}

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401) {
        setIsOpenModal(true);
      }

      return Promise.reject(error);
    };

    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  }, []);
  return (
    <>
      {isOpenModal && (
        <ModalErrorAuthenticate
          toggleModal={() => setIsOpenModal(!isOpenModal)}
        />
      )}
      {children}
    </>
  );
};

export default AxiosInterceptor;
