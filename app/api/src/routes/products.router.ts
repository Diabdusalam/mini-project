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
    this.router.get("/", this.productsController.getProducts);
    this.router.delete("/:id", this.productsController.deleteProducts);
    this.router.put("/:id", this.productsController.updateProduct);
    this.router.get("/:id", this.productsController.getProduct);
  }
  public getRouter(): Router {
    return this.router;
  }
}
