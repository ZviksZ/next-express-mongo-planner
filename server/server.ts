import * as dotenv             from "dotenv";

dotenv.config();

import "./core/db";
import { passport }            from "./core/passport";
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
import { registerValidations } from "./validations/register";
import { UserCtrl }            from "./controllers/UserController";
import { TaskCtrl }            from "./controllers/TaskController";

const app = express();

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.post("/auth/register", registerValidations, UserCtrl.register);
app.post("/auth/login", passport.authenticate("local"), UserCtrl.login);
app.get(
  "/auth/me",
  passport.authenticate("jwt", { session: false }),
  UserCtrl.getUserInfo
);

app.get("/tasks", TaskCtrl.getTasks)
app.get("/tasks/:id", TaskCtrl.getOne)
app.post("/tasks", TaskCtrl.create)
app.delete("/tasks/:id", TaskCtrl.delete)
app.patch("/tasks/:id", TaskCtrl.update)


app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
