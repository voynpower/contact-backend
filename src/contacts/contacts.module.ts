import { Module } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService],
})
export class ContactsModule { }
