import { model, Schema, Document } from "mongoose";

export interface UserModelInterface{
  _id?: string;
  email: string;
  name: string;
  password: string;
  avatarUrl?: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema<UserModelDocumentInterface>(
  {
    email: {
      unique: true,
      required: true,
      type: String,
    },
    name: {
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
  transform: function (_, obj) {
    delete obj.password;
    return obj;
  },
});

export const UserModel = model<UserModelDocumentInterface>("User", UserSchema);
