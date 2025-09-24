import { axiosInstance } from "../../../libs/api";

export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
