// module imports
import { Server as HttpServer } from "http";
import { Application, Router } from "express";

// internal imports
import { Logger } from "./services";

// Server - A class abstracting the process of setting up an express app
export class Server {

  private router: Router;
  private logger: Logger;
  public server: HttpServer | undefined;

  constructor(private readonly app: Application) {
    this.logger = new Logger();
    this.router = Router();
    this.init();
  }

  public start(port: string = "8080"): Promise<void> {
    return new Promise((resolve, _) => {
      this.server = this.app.listen(parseInt(port, 10), () => {
        this.logger.info(`Server started at port ${port}.`);
        resolve();
      })
    })
  }

  public stop() {
    if (this.server) {
      this.server.close();
      this.logger.info(`Server stopped.`);
    }
  }

  private mountRouter(path: string, router: Router) {

  }

  private init() {

  }
}