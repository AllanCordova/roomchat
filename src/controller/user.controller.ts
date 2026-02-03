import { Response, Request } from "express";
import { UserModel } from "../models/user.model";
import { AppError } from "../lib/errors/app.error";

export class UserController {
  private userModel: UserModel = new UserModel();

  public getAll = async (req: Request, res: Response) => {
    const response = await this.userModel.getAll();

    return res.status(200).json({ success: true, data: response });
  };
}
