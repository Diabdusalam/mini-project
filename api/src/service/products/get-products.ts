import { Prisma } from "@prisma/client";
import { paramsQuery } from "../../domain/query.models";
import prisma from "../../prisma";

export const getProductsService = async (query: paramsQuery) => {
  try {
    const { search, sort_price, sort_product, sort_stock } = query;

    const whereClause: Prisma.ProductsWhereInput = search
      ? { name: { contains:search } }
      : {};
    const product = await prisma.products.findMany({
      where: whereClause,
      orderBy: [
        { name: sort_product },
        { stock: sort_stock },
        { price: sort_price },
      ],
    });

    if (product.length === 0) {
      return { messages: "Product not found", data: [] };
    }
    console.log(product);
    return { messages: "success get Products", data: product };
  } catch (error) {
    throw error;
  }
};
