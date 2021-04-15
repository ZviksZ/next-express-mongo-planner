import { model, Schema, Document }    from "mongoose";
import { UserModelDocumentInterface } from "./UserModel";

export type TaskStatuses = 'progress' | 'done' | 'pause';
export type TaskPriorities = 'top' | 'middle' | 'low';

export interface Task {
  _id?: string;
  links: string[];
  title: string;
  description: string;
  deadline: string;
  status: TaskStatuses;
  priority: TaskPriorities;
  user: UserModelDocumentInterface;
}

export type TaskModelDocumentInterface = Task & Document;

const TaskSchema = new Schema(
  {
    links: [
      {
        type: String,
      },
    ],
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    deadline: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    priority: {
      required: true,
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<TaskModelDocumentInterface>(
  "Task",
  TaskSchema
);
