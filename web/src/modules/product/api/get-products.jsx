import { axiosInstance } from "../../../libs/api";

export const getProducts = async (
  search,
  sort_product,
  sort_price,
  sort_stock
) => {
  const response = await axiosInstance.get(`/products`, {
    params: { search, sort_product, sort_price, sort_stock },
  });
  console.log("response", response);
  return response;
};
