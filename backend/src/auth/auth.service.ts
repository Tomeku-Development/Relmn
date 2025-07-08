import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { verifyMessage } from 'ethers';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(walletAddress: string, signature: string, message: string): Promise<any> {
    try {
      const recoveredAddress = verifyMessage(message, signature);
      if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
        throw new UnauthorizedException('Invalid signature');
      }
    } catch (error) {
      throw new UnauthorizedException('Signature verification failed');
    }

    // Find or create the user after signature is verified
    const user = await this.usersService.findOrCreate(walletAddress);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { walletAddress: user.walletAddress, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
