import nodeMailer from 'nodemailer';

class MailService {
  transporter;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  async sendActivate(mail: string, link: string) {
    const activateLink = `${process.env.SERVER_URL}/auth/activate/${link}`;

    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: mail,
      subject: 'Activate profile',
      text: '',
      html: `
        <div>
          <h1>To activate your account, follow the link</h1>
          <a href="${activateLink}">${activateLink}</a>
        </div>
      `
    });
  }
}

export const mailService = new MailService();
