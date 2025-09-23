import { Request, Response } from "express";
import { createProductService } from "../service/products/create-product";
export class ProductsController {
  async createProduct(req: Request, res: Response): Promise<Response | void> {
    try {
      const response = await createProductService(req.body);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
