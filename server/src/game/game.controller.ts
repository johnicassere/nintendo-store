import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from '@prisma/client';
import { CreateGameDto } from './dto/create-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private service: GameService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() data: CreateGameDto): Promise<Game> {
    return this.service.create(data);
  }
}
