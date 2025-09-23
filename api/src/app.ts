import express, { Express, urlencoded } from "express";
import cors from "cors";
export default class App {
  private app: Express;

  constructor() {
    this.app = express();
  }
  private configure(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(urlencoded({ extended: true }));
  }
  private routes(): void {}
  public start(): void {
    this.app.listen(8000, () => console.log("Listening on port 8000"));
  }
}
