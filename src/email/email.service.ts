import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { sendEmailDto } from './dtos/email.dto';
import Handlebars from 'handlebars';
import { welcomeTemplate } from './templates/welcome.template';

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {}

  emailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });

    return transporter;
  }

  async sendEmail(dto: sendEmailDto) {
    const { recipients, subject, html, text } = dto;

    const transporter = this.emailTransport();

    const options: nodemailer.SendMailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipients,
      subject,
      html,
      text,
    };

    try {
      const info = await transporter.sendMail(options);
      console.log('Email sent:', info.response);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  compileTemplate(template: string, context: Record<string, any>): string {
    const compiledTemplate = Handlebars.compile(template);
    return compiledTemplate(context);
  }

  async sendWelcomeEmail(recipient: string, context: { name: string; verificationCode: string }) {
    const html = this.compileTemplate(welcomeTemplate, context);

    const options: nodemailer.SendMailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipient,
      subject: 'Bienvenido a nuestra plataforma',
      html,
    };

    try {
      const info = await this.emailTransport().sendMail(options);
      console.log('Email sent:', info.response);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  // Método genérico para enviar emails con cualquier plantilla
  async sendEmailWithTemplate(
    recipient: string, 
    subject: string, 
    template: string, 
    context: Record<string, any>
  ) {
    const html = this.compileTemplate(template, context);

    const options: nodemailer.SendMailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipient,
      subject,
      html,
    };

    try {
      const info = await this.emailTransport().sendMail(options);
      console.log('Email sent:', info.response);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
