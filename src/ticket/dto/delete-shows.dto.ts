import { PickType } from '@nestjs/mapped-types';
import { CreateShowDto } from './create-shows.dto';

export class DeleteShowDto extends PickType(CreateShowDto, [
  'password',
] as const) {}