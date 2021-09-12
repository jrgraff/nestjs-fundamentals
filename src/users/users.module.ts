import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { UserService } from './service/user/user.service';
import { PostService } from './service/post/post.service';

@Module({
  controllers: [UsersController, PostsController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    PostService,
  ],
})
export class UsersModule {}
