import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { sendEmailDto } from './dtos/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() dto: sendEmailDto) {
    await this.emailService.sendEmail(dto);

    return { message: "Email sent successfully" }
  }
}
