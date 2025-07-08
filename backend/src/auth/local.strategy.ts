import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'walletAddress', passReqToCallback: true });
  }

  async validate(req: Request): Promise<any> {
    const { walletAddress, signature, message } = req.body;
    if (!walletAddress || !signature || !message) {
      throw new UnauthorizedException('Missing credentials');
    }

    const user = await this.authService.validateUser(walletAddress, signature, message);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
