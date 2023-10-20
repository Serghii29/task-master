import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import AuthSevices from '../services/auth.service';

class AuthController {
  constructor(private authServices: AuthSevices) {}

  async registration(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors });
    }
    const data = req.body;

    const userData = await this.authServices.registrationUser(data);

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });

    res.status(201).json(userData);
  }

  async login(req: Request, res: Response) {
    const data = req.body;

    const userData = await this.authServices.loginUser(data);

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });

    res.status(201).json(userData);
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;

    await this.authServices.logout(refreshToken);

    res.clearCookie('refreshToken');

    res.status(200);
  }

  async activate(req: Request, res: Response) {
    const activateLink = req.params.link;

    await this.authServices.activate(activateLink);

    res.redirect(process.env.CLIENT_URL);
  }

  async recoverPasswordLink(req: Request, res: Response) {
    const activateLink = req.params.link;

    await this.authServices.recoverPassword(activateLink);

    res.redirect(`${process.env.CLIENT_URL}/${process.env.CHANGE_ROUTE}/${activateLink}`);
  }

  async forgotPassword(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors });
    }

    const { email } = req.body;

    const userData = await this.authServices.forgotPassword(email);

    res.status(201).json(userData);
  }

  async recoverPassword(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors });
    }

    const { password } = req.body;
    const activateLink = req.params.link;

    const userData = await this.authServices.updatePassword(password, activateLink);

    res.status(201).json(userData);
  }

  async reset(req: Request, res: Response) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { old_password, new_password } = req.body;

    const { refreshToken } = req.cookies;

    const userData = await this.authServices.resetPassword(
      old_password,
      new_password,
      refreshToken
    );

    res.status(201).json(userData);
  }
}

const authController = new AuthController(new AuthSevices());

export default authController;
