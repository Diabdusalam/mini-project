import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";

export class ProductsRouter {
  private router: Router;
  private productsController = new ProductsController();
  constructor() {
    this.router = Router();
    this.productsController = new ProductsController();
    this.intializeRoutes();
  }
  private intializeRoutes(): void {
    this.router.post("/", this.productsController.createProduct);
  }
  public getRouter(): Router {
    return this.router;
  }
}
