import { URL, PORT } from "./constants";

import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import db from "./database/database";
import mig from "./database/mig";
import auth_route from "./routes/auth";
import employee_route from "./routes/employee";

const app = express();

app.use(express.json());
app.use(morgan("common"));

app.use(
  cors({
    origin: ["http://localhost:3000", URL],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.get("/", (_: Request, res: Response) => {
  return res.send("Hello World!");
});

app.get("/health", (_: Request, res: Response) => {
  return res.status(200).send({
    status: "ok",
  });
});

app.use("/auth", auth_route);
app.use("/employee", employee_route);

db.connect().then(async () => {
  // on database ready, we run migrations/seeds functions
  console.log("Successfuly connected to database!");

  // create the default HR user.
  await mig.createAdmin();
  console.log("Successfuly migrated database!");

  // start listening after db connection
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
});
