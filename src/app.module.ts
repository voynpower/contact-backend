import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [ContactsModule],
  controllers: [ContactsController],
  providers: [PrismaService],
})
export class AppModule { }
