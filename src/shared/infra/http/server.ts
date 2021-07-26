import "reflect-metadata";
import cors from "cors";
import express from "express";

import "../typeorm";
import "../../container";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server started on port 3333! 🚀");
});
