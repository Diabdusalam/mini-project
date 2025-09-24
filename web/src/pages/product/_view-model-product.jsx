import { useState } from "react";
export default function ViewModelProduct() {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [openModalSucess, setOpenModalSucess] = useState(false);
  return {
    openModalDelete,
    openModalSucess,
    openModalFailed,
    setOpenModalSucess,
    setOpenModalDelete,
    setOpenModalFailed,
  };
}
