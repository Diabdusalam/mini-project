import { ProductStatus } from "@prisma/client";

export interface IProducts {
  id?: string;
  name: string;
  price: number;
  stock: number;
  is_sell: ProductStatus;
}
