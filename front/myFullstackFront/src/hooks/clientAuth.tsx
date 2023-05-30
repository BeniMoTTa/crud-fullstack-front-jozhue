import { useContext } from "react";
import { ClientContext } from "../providers/ClientProvider";

export const useClient = () => {
  const clientContext = useContext(ClientContext);

  return clientContext;
};
