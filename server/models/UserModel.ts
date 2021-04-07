import { model, Schema, Document } from "mongoose";

export interface UserModelInterface{
  _id?: string;
  email: string;
  username: string;
  password?: string;
  avatarUrl?: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema(
  {
    email: {
      unique: true,
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.set("toJSON", {
  transform: function (_: any, obj: UserModelInterface) {
    delete obj.password;
    return obj;
  },
});

export const UserModel = model<UserModelDocumentInterface>("User", UserSchema);
