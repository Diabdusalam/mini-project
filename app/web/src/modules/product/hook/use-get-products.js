import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";
const setDetailProducts = ({
  search = null,
  sort_product = null,
  sort_price = null,
  sort_stock = null,
  enabled = true,
}) => {
  const sortBy = sort_product || sort_price || sort_stock;
  return useQuery({
    queryKey: ["getProducts", search, sortBy],
    queryFn: () => getProducts(search, sortBy),
    enabled,
    keepPreviousData: true,
  });
};
export default setDetailProducts;
