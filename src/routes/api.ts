import { Router } from "express";

import userRouter from "./user/user.routes";
import authRoute from "./auth/auth.routes";

const api = Router();

api.use("/user", userRouter);
api.use("/auth", authRoute);

export default api;
