import * as dotenv from "dotenv";

dotenv.config();

import "./core/db";
import { passport } from "./core/passport";
const cors = require("cors");
const express = require("express");
import { registerValidations } from "./validations/register";
import { UserCtrl } from "./controllers/UserController";

const app = express();

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());


app.post("/auth/register", registerValidations, UserCtrl.register);
app.post("/auth/login", passport.authenticate("local"), UserCtrl.login);
app.get(
  "/auth/me",
  passport.authenticate("jwt", { session: false }),
  UserCtrl.getUserInfo
);


app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
