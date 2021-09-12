import { Injectable } from '@nestjs/common';

import { UserDto } from 'src/users/dto/User';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
  private users: UserDto[] = [];

  createUser(user: UserDto) {
    return this.users.push(user);
  }
  getUser(): UserDto[] {
    return this.users;
  }
  getUserByUsername(username: string): UserDto | undefined {
    return this.users.find((user) => user.username === username);
  }
  deleteUser() {
    throw new Error('Method not implemented.');
  }
}
