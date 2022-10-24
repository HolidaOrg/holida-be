import { Response, Request } from "express";

import { IUserSignUpData } from "../../interfaces/IAuth";

import { prisma } from "../../utils/prisma";
import { hashPassword } from "../../utils/password";

export async function signUpUser(req: Request, res: Response) {
  try {
    const { email, password, firstName, lastName }: IUserSignUpData = req.body;

    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (checkUser)
      return res
        .status(400)
        .json({ message: "Sorry, but this email is taken :(" });

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    return res
      .status(200)
      .json({ message: "Yay, user was created successfully" });
  } catch (error) {
    res.status(500).json({ message: null, error: error });
  }
}
