import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/get-product";
const setgetProduct = ({ id }) => {
  return useQuery({
    queryKey: ["getProduct", id],
    queryFn: () => getProduct(id),
    // enabled,
  });
};
export default setgetProduct;
