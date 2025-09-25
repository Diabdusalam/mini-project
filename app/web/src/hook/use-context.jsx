import { createContext, useContext, useState } from "react";
const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [openModalSucess, setOpenModalSucess] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModalDelete,
        setOpenModalDelete,
        openModalSucess,
        setOpenModalSucess,
        openModalFailed,
        setOpenModalFailed,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

export default ModalContext;
