import { BadRequestException } from '@nestjs/common'

export class MinistryAccessCodeNotValidException extends BadRequestException {
  constructor() {
    super({
      statusCode: 400,
      message: 'Código de acesso inválido',
      error: 'Bad Request',
      code: 'MINISTRY_ACCESS_CODE_NOT_VALID',
    })
  }
}
