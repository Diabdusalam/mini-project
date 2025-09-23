import { IProducts } from "../../domain/models/products.models";
import prisma from "../../prisma";

export const createProductService = async (data: IProducts) => {
  try {
    const existingProduct = await prisma.products.findFirst({
      where: {
        name: data.name,
      },
    });
    if (existingProduct) {
      throw new Error("Product already exists");
    }
    const response = await prisma.products.create({ data: data });

    return { messag: "Product created successfully", data: response };
  } catch (error) {
    throw error;
  }
};
