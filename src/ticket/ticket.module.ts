import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Show } from "./shows.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Show])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
