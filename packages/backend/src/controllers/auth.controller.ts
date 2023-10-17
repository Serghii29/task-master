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

    res.cookie('refreshToken', userData.refreshToken, {});

    res.status(201).json(userData);
  }

  async login(req: Request, res: Response) {
    const data = req.body;

    const userData = await this.authServices.loginUser(data);

    res.cookie('refreshToken', userData.refreshToken, {});

    res.json(userData);
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

    res.redirect('http://localhost:3000');
  }
}

const authController = new AuthController(new AuthSevices());

export default authController;
