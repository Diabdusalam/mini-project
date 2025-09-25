import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import setgetProduct from "../../../modules/product/hook/use-get-product";
import { editProductService } from "../../../modules/product/api/edit-product";

export default function EditProductModel() {
  const [openModalSucess, setOpenModalSucess] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data } = setgetProduct({ id }, { enabled: !!id });
  console.log(data);
  const { setValue, formState, handleSubmit, register } = useForm({
    values: {
      name: ``,
      price: 0,
      stock: 0,
      is_sell: "",
    },
  });
  console.log(useForm());
  const queryClient = useQueryClient();
  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("price", Number(data.price));
      setValue("stock", Number(data.stock));
      setValue("is_sell", data.is_sell);
    }
  }, [data, setValue]);
  const onSubmit = async (formData) => {
    try {
      const payload = {
        name: formData.name,
        price: Number(formData.price),
        stock: Number(formData.stock),
        is_sell: formData.is_sell,
      };
      await editProductService(id, payload);
      // setOpenEdit(false);
      setOpenModalSucess(true);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
      navigate(-1);
    } catch (error) {
      console.log(error);
      // setOpenEdit(false);
      console.log(error);
      // setOpenModalFailed(true);
    }
  };
  useEffect(() => {}, []);
  return {
    setOpenModalSucess,
    setOpenModalFailed,
    openModalSucess,
    openModalFailed,
    register,
    navigate,
    onSubmit,
    setValue,
    formState,
    handleSubmit,
  };
}
