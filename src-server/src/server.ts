import express, { Express } from "express";
import {router as v1} from "./v1/routes";

export const app: Express = express();
const port = 4029;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
});

app.use('/api/v1', v1);