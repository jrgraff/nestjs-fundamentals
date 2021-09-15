import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/typeorm';
import { UserDetails } from 'src/utils/types';
import { IAuthenticationProvider } from './auth';

@Injectable()
export class AuthService implements IAuthenticationProvider {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async validateUser(details: UserDetails) {
    const { discordId } = details;
    const user = await this.userRepository.findOne({ discordId });
    console.log(user);
    if (user) return user;
    return await this.createUser(details);
  }
  createUser(details: UserDetails) {
    const user = this.userRepository.create(details);
    return this.userRepository.save(user);
  }
  findUser(discordId: string): Promise<User | undefined> {
    return this.userRepository.findOne({ discordId });
  }
}
