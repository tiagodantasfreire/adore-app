import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET ?? ''

type RequestWithUser = Request & { headers: { authorization: string } }

export const GetUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request: RequestWithUser = ctx.switchToHttp().getRequest()
    const authHeader = request.headers['authorization']
    if (!authHeader) return null

    const token = authHeader.split(' ')[1]
    if (!token) return null

    try {
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload
      return data ? (decoded[data] as number) : decoded
    } catch (err) {
      console.error('Invalid token in @GetUser', err)
      return null
    }
  },
)
