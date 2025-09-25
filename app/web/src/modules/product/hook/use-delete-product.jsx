import { useModal } from "../../../hook/use-context";
import ModalDelete from "../../../componnet/modal-delete";
import { deleteProduct } from "../api/delete-product";
import { Trash } from "lucide-react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function HandelDeleteProduct({ id }) {
  //  const [openModalDelete,setOpenModalDelete] = useState(false);
  const {
    openModalDelete,
    setOpenModalDelete,
    setOpenModalSucess,
    setOpenModalFailed,
  } = useModal();

  console.log(id);
  const queryClient = useQueryClient();
  const handleDelete = async () => {
    setOpenModalDelete(true);
    try {
      await deleteProduct(id);
      setOpenModalSucess(true);
      setOpenModalDelete(false);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    } catch (error) {
      setOpenModalFailed(true);
      setOpenModalDelete(false);
    }
  };

  return (
    <>
      <button
        className="btn btn-sm btn-danger rounded-2 p-2"
        onClick={() => setOpenModalDelete(true)}
      >
        <Trash style={{ height: "20px", width: "20px" }} />
      </button>
      <ModalDelete
        onSubmit={handleDelete}
        show={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
      />
    </>
  );
}
