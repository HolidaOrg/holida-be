import { Router } from "express";

import { signUpUser } from "./auth.controller";

const authRoute = Router();

authRoute.post("/sign-up", signUpUser);

export default authRoute;
