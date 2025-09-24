import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addProductService } from "../../../modules/product/api/add-product";
import { useState } from "react";
import { editProductService } from "../../../modules/product/api/edit-product";
import { useEffect } from "react";

export default function EditProductModel() {
  const [openModalSucess, setOpenModalSucess] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const navigate = useNavigate();
  const searchParams = searchParams.get("id");
  console.log(searchParams);
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
      await editProductService(item.id, payload);
      setOpenEdit(false);
      setOpenModalSucess(true);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    } catch (error) {
      console.log(error);
      setOpenEdit(false);
      setOpenModalFailed(true);
    }
  };
  useEffect(() => {}, []);
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
