import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.contact.findMany();
  }

  async create(dto: CreateContactDto) {
    return this.prisma.contact.create({ data: dto });
  }

  async delete(id: number) {
    return this.prisma.contact.delete({ where: { id } });
  }
}
