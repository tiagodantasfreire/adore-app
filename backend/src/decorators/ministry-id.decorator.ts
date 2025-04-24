import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export const GetMinistryId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()
    const ministryId = request.params.ministryId
    return ministryId ? Number(ministryId) : null
  },
)
