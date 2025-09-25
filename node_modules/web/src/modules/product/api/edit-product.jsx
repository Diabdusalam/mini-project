import { axiosInstance } from "../../../libs/api";

export const editProductService = async (id,body) => {
  await axiosInstance.put(`/products/${id}`, body);
};
