import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT as string;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("Index");
});

app.listen(port, () => {
  console.debug(`⚡️[server]: Server is running at port ${port}`);
});
