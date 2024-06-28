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
  import { CreateArticleDto } from './dto/create-article.dto';
  import { DeleteArticleDto } from './dto/delete-article.dto';
  import { UpdateArticleDto } from './dto/update-article.dto';
  
  @Controller('ticket')
  export class TicketController {
    constructor(private readonly ticketService: TicketService) {}
  
    @Get('/articles')
    getArticles() {
      return this.ticketService.getArticles();
    }
  
    @Get('/articles/:id')
    getArticleById(@Param('id') articleId: number) {
      return this.ticketService.getArticleById(articleId);
    }
  
    @Post('/articles')
    createArticle(@Body() data: CreateArticleDto) {
      return this.ticketService.createArticle(
        data.title,
        data.content,
        data.password,
      );
    }
  
    @Put('/articles/:id')
    updateArticle(
      @Param('id') articleId: number,
      @Body() data: UpdateArticleDto,
    ) {
      return this.ticketService.updateArticle(
        articleId,
        data.title,
        data.content,
        data.password,
      );
    }
  
    @Delete('/articles/:id')
    deleteArticle(
      @Param('id') articleId: number,
      @Body() data: DeleteArticleDto,
    ) {
      return this.ticketService.deleteArticle(articleId, data.password);
    }
  }