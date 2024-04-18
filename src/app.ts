import express, {Application, Request, Response,} from "express";
import config from "./config/config";
import cors from "cors";
import { db } from "./models";
import routers from "./api/router";
async function startServer() {
  const app: Application = express();
  app.listen(config.port, () => {
  });
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
  });
  const corsOptions = {
    origin: `${process.env.REQ_ADDRESS}`,
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
   /* ROUTER */
  app.use(config.api.prefix, routers);
  await db.sequelize.sync()
}

startServer();