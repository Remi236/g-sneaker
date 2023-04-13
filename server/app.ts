import express, { Request, Response } from 'express';
import cors from 'cors';
import { routers, Route } from './Routes';

export class App {
  protected readonly app = express();
  protected readonly port;
  protected readonly routers;
  protected config;

  constructor() {
    // load config
    this.config = this.getConfig();
    this.port = this.config.port;
    this.routers = routers;
    const corsOption: Record<string, any> = this.config.cors;
    const urlencodedOption: Record<string, any> = this.config.urlencoded;

    // settings
    this.app.use(cors(corsOption));
    this.app.use(express.json());
    this.app.use(express.urlencoded(urlencodedOption));

    // routes
    this.createRoutes();
  }

  public getConfig() {
    return {
      cors: {
        // origin: process.env.CORS_ORIGINS?.split(' '),
        origin: '*',
      },
      port: parseInt(process.env.PORT!, 10) | 3000,
      urlencoded: { extended: true },
      routers,
    };
  }

  private createRoutes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello visit to /api-docs to continue !');
    });

    // Routing
    this.routers.forEach((item: Route) => {
      this.app.use(item.path, item.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Application is listening on: ${this.port}`);
    });
  }
}

export default App;
