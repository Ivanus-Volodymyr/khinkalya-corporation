import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { User } from "@prisma/client";
import { LoginGoogleTokenDto } from "../google/dto/google.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  // @UseGuards(AuthorizedGuard)
  GetUsers() {
    return this.userService.getAll();
  }

  @Get("/:id")
  getUserById(@Param("id") id: string) {
    return this.userService.getUsersById(id);
  }

  @Put("/:id")
  @UseInterceptors(FileInterceptor("avatar"))
  updateUserById(
    @UploadedFile() file,
    @Body() user: Partial<User>,
    @Param("id") id: string
  ) {
    return this.userService.updateUserById(file, user, id);
  }
}
