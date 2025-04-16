// jwt-auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { Request } from 'express'
import { UserService } from 'src/user/user.service'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    const authHeader = request.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (!token) throw new UnauthorizedException('Missing token')

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!,
      ) as jwt.JwtPayload

      const user = await this.userService.findById(decoded.id)
      if (!user) throw new UnauthorizedException('User not found')

      request['user'] = user // attach to request
      return true
    } catch {
      throw new UnauthorizedException('Invalid token')
    }
  }
}
