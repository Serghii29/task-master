import nodeMailer from 'nodemailer';

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sedruk7@gmail.com',
        pass: 'rootroot4'
      }
    });
  }

  async sendActivate(mail: string, link: string) {
    const activateLink = `http://localhost:4200/api/auth/activate/${link}`;

    await this.transporter.sendMail({
      from: 'sedruk7@gmail.com',
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
