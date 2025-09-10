import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  @Get()
  getAll() {
    return this.contactsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactsService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.contactsService.delete(+id);
  }
}
