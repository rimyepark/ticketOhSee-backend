import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateShowDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsNumber()
  readonly password: number;

  @IsString()
  readonly location: string;

  @IsNumber()
  readonly age: number;

  @IsNumber()
  readonly quantity: number;

  @IsDate()
  readonly start_time: Date;

  @IsDate()
  readonly end_time: Date;

  @IsDate()
  readonly createdAt: Date;

  @IsDate()
  readonly updated_at: Date;

  @IsDate()
  readonly deletedAt: Date;

}