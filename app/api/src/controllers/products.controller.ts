import { NextFunction, Request, Response } from "express";
import { createProductService } from "../service/products/create-product";
import { getProductsService } from "../service/products/get-products";
import { paramsQuery } from "../domain/query.models";
import { deleteProductService } from "../service/products/delete-product";
import { updateProductService } from "../service/products/update-product";
import { getProductService } from "../service/products/get-product";
export class ProductsController {
  async createProduct(req: Request, res: Response): Promise<Response | void> {
    try {
      const response = await createProductService(req.body);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async getProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      console.log(req.query);
      const query = {
        search: (req.query.search as string) || "",
        sort_product: req.query.sort_product as "asc" | "desc" | undefined,
        sort_price: req.query.sort_price as "asc" | "desc" | undefined,
        sort_stock: req.query.sort_stock as "asc" | "desc" | undefined,
      };
      const { data } = await getProductsService(query);
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async deleteProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const response = await deleteProductService(String(req.params.id));
      return res.status(200).send(response);
    } catch (error) {
      next(error);
      return res.status(500).send(error);
    }
  }
   async updateProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const response = await updateProductService(String(req.params.id) ,req.body);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
      return res.status(500).send(error);
    }
  }
  async getProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { data } = await getProductService( String(req.params.id) );
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
