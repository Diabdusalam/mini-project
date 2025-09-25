import prisma from "../../prisma";

export const getProductService = async (id:string) => {
  try {
   
    const existingProduct = await prisma.products.findFirst({
      where: {
        id: id,
      },
    });
    if (!existingProduct) {
      throw new Error("Product not found");
    }

    const product = await prisma.products.findMany(
      {
        where: {
          id: id,
        },
      }
    );

    if (product.length === 0) {
      return { messages: "Product not found", data: [] };
    }
    console.log(product);
    return { messages: "success get Products", data: product };
  } catch (error) {
    throw error;
  }
};
