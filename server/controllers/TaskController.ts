import * as express from "express";
import { isValidObjectId } from "../utils/isValidObjectId";
import { TaskModel }       from "../models/TaskModel";
/*
import { validationResult } from "express-validator";
import { TweetModel } from "../models/TweetModel";
import { isValidObjectId } from "../utils/isValidObjectId";
import { UserModelInterface } from "../models/UserModel";*/

class TaskController {
  async getTasks(req: any, res: express.Response): Promise<void> {
    try {
      const requestTasks = req.user ? {
        user: req.user._id
      } : {}
      const tasks = await TaskModel.find(requestTasks).populate('user', 'username').exec();

      res.json({
        status: "success",
        data: tasks,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async create(req: any, res: express.Response): Promise<void> {
    try {

      const task = new TaskModel({...req.body, user: req.user._id});

      await task.save();

      res.json({
        status: "success",
        data: task,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async getOne(req: express.Request, res: express.Response): Promise<void> {
    try {
      const taskId = req.params.id;

      if (!isValidObjectId(taskId)) {
        res.status(400).send();
        return;
      }

      const task = await TaskModel.findById(taskId);

      if (!task) {
        res.status(404).send();
        return;
      }

      res.json({
        status: "success",
        data: task,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {
    try {
      const taskId = req.params.id;

      if (!isValidObjectId(taskId)) {
        res.status(400).send();
        return;
      }

      await TaskModel.findByIdAndDelete(taskId);

      res.json({
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async update(req: any, res: express.Response): Promise<void> {
    try {
      const taskId = req.params.id;
      const taskUpdated = req.body;

      if (!isValidObjectId(taskId)) {
        res.status(400).send();
        return;
      }

      await TaskModel.updateOne({ _id: taskId }, { ...taskUpdated });

      res.json({
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
}

export const TaskCtrl = new TaskController();
