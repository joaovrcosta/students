import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "../../container/index";
import "../typeorm/index";
import { AppError } from "../../errors/AppError";
import cors from 'cors'

//Imports são feitos para chamar um pacote ou algum outro arquivo da nossa aplicação.

const app = express();

app.use(cors())
app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
