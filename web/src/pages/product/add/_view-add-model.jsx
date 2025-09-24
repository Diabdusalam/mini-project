import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addProductService } from "../../../modules/product/api/add-product";
import { useState } from "react";

export default function AddProductModel() {
  const [openModalSucess, setOpenModalSucess] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const navigate = useNavigate();
  const { setValue, formState, handleSubmit } = useForm({
    values: {
      name: "",
      price: 0,
      stock: 0,
      is_sell: "",
    },
  });
  const queryClient = useQueryClient();
  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        price: Number(data.price),
        stock: Number(data.stock),
        is_sell: data.is_sell,
      };

      await addProductService(payload);

      setOpenModalSucess(true);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
      navigate("/");
    } catch (error) {
      setOpenAdd(false);
      setOpenModalFailed(true);
    }
  };
  return {
    setOpenModalSucess,
    setOpenModalFailed,
    openModalSucess,
    openModalFailed,
    navigate,
    onSubmit,
    setValue,
    formState,
    handleSubmit,
  };
}
