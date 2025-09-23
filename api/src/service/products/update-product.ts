import { IProducts } from "../../domain/models/products.models";
import prisma from "../../prisma";

export const updateProductService = async (id:string,data: IProducts) => {
  try {
    const existingProduct = await prisma.products.findFirst({
      where: {
       id:id
      },
    });
    if (!existingProduct) {
      throw new Error("Product not found");
    }
    const response = await prisma.products.update({ where: { id: id }, data: {
        ...(data.name && {name: data.name}),
        ...(data.price && {price: data.price}),
        ...(data.stock && {stock: data.stock}),
        ...(data.is_sell && {is_sell: data.is_sell})
    }});

    return { messages: `Product updated successfully`, data: response };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
