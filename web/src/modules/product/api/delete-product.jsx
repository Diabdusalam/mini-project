import { axiosInstance } from "../../../libs/api";

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
};
