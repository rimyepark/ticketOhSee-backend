import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { TicketService } from './ticket.service';
  import { CreateShowDto } from './dto/create-shows.dto';
  import { DeleteShowDto } from './dto/delete-shows.dto';
  import { UpdateShowDto } from './dto/update-shows.dto';
  
  @Controller('ticket')
  export class TicketController {
    constructor(private readonly ticketService: TicketService) {}
  
    @Get('/shows')
    async getShows() {
      return await this.ticketService.getShows();
    }
  
    @Get('/shows/:id')
    async getShowById(@Param('id') showId: number) {
      return await this.ticketService.getShowById(showId);
    }
  
    @Post('/shows')
    createShows(@Body() data: CreateShowDto) {
      return this.ticketService.createShow(
        data.title,
        data.password,
        data.content, 
        data.start_time,
        data.end_time,
        data.age,
        data.quantity,
        data.location,
      );
    }
  
    @Put('/shows/:id')
    async updateShow(
      @Param('id') showId: number,
      @Body() data: UpdateShowDto,
    ) {
      return await this.ticketService.updateShow(
        showId,
        data.title,
        data.password,
        data.location,
        data.start_time,
        data.end_time,
        data.age,
        data.quantity,
        data.content, 
        
      );
    }
  
    @Delete('/shows/:id')
    async deleteShow(
      @Param('id') showId: number,
      @Body() data: DeleteShowDto,
    ) {
      return await this.ticketService.deleteShow(showId, data.password);
    }
  }