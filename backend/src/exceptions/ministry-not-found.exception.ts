import { NotFoundException } from '@nestjs/common'

export class MinistryNotFoundException extends NotFoundException {
  constructor() {
    super({
      statusCode: 404,
      message: 'Ministério não encontrado',
      error: 'Not Found',
      code: 'MINISTRY_NOT_FOUND',
    })
  }
}
