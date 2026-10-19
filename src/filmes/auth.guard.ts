import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

interface RequestWithAuth {
  headers: { 'x-access-token'?: string };
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithAuth>();
    const token = request.headers['x-access-token'];
    if (token !== 'secrettoken') {
      throw new UnauthorizedException('Token inválido ou ausente');
    }
    return true;
  }
}
