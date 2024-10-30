import { Get,Body, Controller, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/interfaces/cat.interface';
import { Cat } from 'src/interfaces/CreateCatDto.interface';
import { CatsService } from 'src/service/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
  
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }
  }