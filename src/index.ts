// module imports
import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

// configuring dotenv
dotenv.config();

// initializing express app
const app: Application = express();

// entry point to all requests
app.get("*", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Ok" });
});

// PORT - the port at which the application will listen and serve
const PORT: string = process.env.PORT || "4000";

// application listening
app.listen(PORT, () => {
  console.log(`App is now serving at PORT : ${PORT}`);
});
