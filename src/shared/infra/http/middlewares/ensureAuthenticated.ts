import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { StudentsRepository } from "../../../../modules/user/infra/typeorm/repositories/StudentsRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing from request", 401);
  }

  //O token esta vindo como Bearer
  const [, token] = authHeader.split(" ");

  try {
    const { sub: student_id } = verify(
      token,
      "de7e21dfbacf0633d8da91beb9ce95f8"
    ) as IPayload;

    const studentsRepository = new StudentsRepository();
    const student = studentsRepository.findById(student_id);

    if (!student) {
      throw new AppError("User does not exists", 401);
    }

    request.student = {
      id: student_id
    }

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
