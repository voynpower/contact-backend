import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

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

  async update(id: number, dto: UpdateContactDto) {
    return this.prisma.contact.update({ where: { id }, data: dto });
  }
}
