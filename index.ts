import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();

import api from "./src/routes/api";
import { prisma } from "./src/utils/prisma";

// import { mongoConnect } from "./src/utils/mongo";

const app: Express = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/v1", api);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running, YAY!");
});

async function startServer() {
  // await mongoConnect();
  await prisma.$connect();

  app.listen(PORT || 8080, () => {
    console.log(
      `⚡️[server]: Server is running at http://localhost:${PORT || 8080}`
    );
  });
}

startServer();
