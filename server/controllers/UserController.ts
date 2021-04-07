import * as express from "express";
import * as jwt from "jsonwebtoken";

import { validationResult } from "express-validator";
import {
  UserModel, UserModelDocumentInterface, UserModelInterface
} from "../models/UserModel";
import { generateMD5 } from "../utils/generateHash";

class UserController {
  async register(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ status: "error", errors: errors.array() });
        return;
      }

      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        password: generateMD5(req.body.password + process.env.SECRET_KEY)
      };

      const user = await UserModel.create(data);

      res.status(201).json({
        status: "success",
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error
      });
    }
  }

  async login(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user
        ? (req.user as UserModelDocumentInterface).toJSON()
        : undefined;

      res.json({
        status: "success",
        data: {
          ...user,
          token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || "123", {
            expiresIn: "30 days"
          })
        }
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error
      });
    }
  }

  async getUserInfo(req: express.Request,res: express.Response): Promise<void> {
    try {
      const user = req.user
        ? (req.user as UserModelDocumentInterface).toJSON()
        : undefined;

      res.json({
        status: "success",
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error
      });
    }
  }
}

export const UserCtrl = new UserController();
