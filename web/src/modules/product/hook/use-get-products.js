import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";
const setDetailProducts = ({
  search = null,
  sort_product = null,
  sort_price = null,
  sort_stock = null,
  enabled = true,
}) => {
  return useQuery({
    queryKey: ["getProducts", search, sort_product, sort_price, sort_stock],
    queryFn: () => getProducts(search, sort_product, sort_price, sort_stock),
    enabled,
    keepPreviousData: true,
    staleTime: 0,
  });
};
export default setDetailProducts;
