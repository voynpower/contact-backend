import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

// PartialType: CreateContactDto의 모든 필드를 optional로 바꿔줌
export class UpdateContactDto extends PartialType(CreateContactDto) { }
