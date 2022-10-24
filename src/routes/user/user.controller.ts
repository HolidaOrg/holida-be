import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  try {
    res.status(200).json({ message: "You got user!" });
  } catch (error) {
    console.log(error);
  }
}
