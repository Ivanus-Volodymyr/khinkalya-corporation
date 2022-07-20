import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "../auth/dto/create-user.dto";
import { S3Service } from "../s3/s3.service";

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private s3Service: S3Service
  ) {}

  async getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({ include: { order: true } });
  }

  getUsersById(id: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email: email } });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({ data: user });
  }

  public async updateUserById(
    file,
    user: Partial<User>,
    id: string
  ): Promise<User> {
    try {
      const userFromDb = await this.getUsersById(id);
      if (userFromDb === null) {
        throw new HttpException(`user with id ${id} was not found in Db`, 404);
      }

      const hashPassword = await bcrypt.hash(user.password, 10);

      if (file) {
        const img = await this.s3Service.uploadFile(file);
        return this.prismaService.user.update({
          where: { id: Number(id) },
          data: { ...user, avatar: img.Location, age: Number(user.age) },
        });
      }

      return this.prismaService.user.update({
        where: { id: Number(id) },
        data: {
          ...user,
          age: Number(user.age),
          password: hashPassword,
        },
      });
    } catch (e) {
      throw new HttpException(e.message, 404);
    }
  }

  deleteUserById(id: string): void {
    this.prismaService.user.delete({ where: { id: Number(id) } });
  }
}
