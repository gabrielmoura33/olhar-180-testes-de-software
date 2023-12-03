import { Query, Resolver } from '@nestjs/graphql'
import { User } from './entities/users.entity'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from 'src/infra/auth/authorization.guard'
import { CurrentUser, AuthUser } from 'src/infra/auth/current-user'
import { FindUserByAuthIdUseCase } from './use-cases/find-user-by-authId.use-case'

@Resolver(() => User)
export class UsersResolver {
  constructor(private findUserByAuthIdUseCase: FindUserByAuthIdUseCase) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => User)
  public async me(@CurrentUser() user: AuthUser) {
    
    const { user: myUser } = await this.findUserByAuthIdUseCase.execute({
      authId: user.sub,
    })

    return myUser
  }
}
