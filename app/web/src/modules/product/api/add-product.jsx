import { axiosInstance } from "../../../libs/api";

export const addProductService = async (body) => {
  await axiosInstance.post(`/products`, body);
};
