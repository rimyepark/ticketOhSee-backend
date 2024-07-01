import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import _ from 'lodash';
import { Show } from './shows.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  
  @Injectable()
  export class TicketService {
    constructor(
      @InjectRepository(Show) private showRepository: Repository<Show>
    ) {}
    private shows = [];
    // 게시글 비밀번호를 저장하기 위한 Map 객체입니다.
    private showPasswords = new Map();
  
    async getShows() {
      return await this.showRepository.find({
        where: { deletedAt: null },
        select: ["title", "content","createdAt"],
      });
    }
  
    async getShowById(id: number) {
      return await this.showRepository.findOne({
        where: { id, deletedAt: null },
        select: ["title", "content", "createdAt", "updatedAt"],
      });
    }
  
    createShow(title: string, password: number, location: string, start_time: Date, end_time: Date, age: number, quantity: number, content: string,) {
      this.showRepository.insert({
        title,
        content,
        location, 
        start_time, 
        end_time, 
        age, 
        quantity,
        password,
      });
    }
  
    async updateShow(id: number, title: string, password: number, location: string,
      start_time: Date, end_time: Date, age: number, quantity: number, content: string) {
        const show = await this.showRepository.findOne({
          where: { id, deletedAt: null },
          select: ["password"],
        });
    
        if (_.isNil(show)) {
          throw new NotFoundException(`show not found. id: ${id}`);
        }
        if (show.password !== password) {
          throw new UnauthorizedException(
            `show password is not correct. id: ${id}`
          );
        }
    
        this.showRepository.update(id, { title, content, location, start_time, end_time, age, quantity });
      }
  
      async deleteShow(id: number, password: number) {
        await this.checkPassword(id, password);
        this.showRepository.softDelete(id); // soft delete를 시켜주는 것이 핵심!
      }
    
      private async checkPassword(id: number, password: number) {
        const show = await this.showRepository.findOne({
          where: { id, deletedAt: null },
          select: ["password"],
        });
        if (_.isNil(show)) {
          throw new NotFoundException(`Show not found. id: ${id}`);
        }
    
        if (show.password !== password) {
          throw new UnauthorizedException(
            `Show password is not correct. id: ${id}`
          );
        }
      }
    }