import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ContactsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
