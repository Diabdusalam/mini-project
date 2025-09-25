import { axiosInstance } from "../../../libs/api";

export const getProduct = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);

  return response;
};
