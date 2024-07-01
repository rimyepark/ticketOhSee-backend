import { PartialType } from '@nestjs/mapped-types';
import { CreateShowDto } from './create-shows.dto';

export class UpdateShowDto extends PartialType(CreateShowDto) {}