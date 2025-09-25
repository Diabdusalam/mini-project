import { IProducts } from "../../domain/models/products.models";
import prisma from "../../prisma";

export const deleteProductService = async (id: string) => {
  try {
    const existingProduct = await prisma.products.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingProduct) {
      throw new Error("Product not found");
    }
    const response = await prisma.products.delete({
      where: {
        id: id,
      },
    });

    return { messages: `Product ${response.name} deleted successfully` };
  } catch (error) {
    throw error;
  }
};
