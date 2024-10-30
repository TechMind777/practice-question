import { Body, Controller, Get, Header, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './interfaces/cat.interface';
import { UpdateCatDto } from './interfaces/UpdateCatDto.interface';

// @Controller({ host: 'admin.example.com' })
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  getHello2(): string {
    return this.appService.getHello();
  }
  @Post()
  @Header('Cache-Control', 'none')
  create() {
    return 'This action adds a new cat';
  }
  @Post()
  async create1(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get(':id')
  findOne1(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
 

  @Put(':id')
  update12(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  
  @Get('get')
  getHello1(@Req() req: Request ): string {
    return 'shsh';
  }
} 

