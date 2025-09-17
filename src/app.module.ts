import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전체 모듈에서 환경변수 사용 가능
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
