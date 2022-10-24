import { Router } from "express";

import { getUser } from "./user.controller";

const userRouter = Router();

userRouter.get("/get-user", getUser);

export default userRouter;
