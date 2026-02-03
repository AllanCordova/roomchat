import { Prisma, User } from "@prisma/client";
import prisma from "../lib/prisma";

export class UserModel {
  public async getAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  public async create(data: Prisma.UserCreateInput): Promise<User> {
    return await prisma.user.create({ data });
  }
}
