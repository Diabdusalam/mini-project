import express, {
  Express,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import cors from "cors";
import { ProductsRouter } from "./routes/products.router";
import e from "express";
export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }
  private configure(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private handleError(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api")) {
        return res.status(404).send({ error: "Route not found" });
      } else {
        next();
      }
    });
  }
  private routes(): void {
    const productsRouter = new ProductsRouter();
    this.app.use("/api/products", productsRouter.getRouter());
  }
  public start(): void {
    this.app.listen(8000, () => console.log("Listening on port 8000"));
  }
}
