export interface paramsQuery {
  page?: number;
  limit?: number;
  search?: string;
  sort_product?: "asc" | "desc" | undefined;
  sort_price?: "asc" | "desc" | undefined;
  sort_stock?: "asc" | "desc" | undefined;
}
