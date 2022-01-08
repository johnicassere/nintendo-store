import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateManyGamesDto } from './dto/create-many-game.dto';
import { Game } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private database: PrismaService) {}

  async create(data: CreateGameDto): Promise<Game> {
    const game = await this.database.game.create({
      data,
    });
    return game;
  }

  async createMany(data: CreateManyGamesDto): Promise<any[]> {
    const createdGames = [];

    data.games.map(async (game) => {
      const gameExist = await this.findPerName(game.name);

      if (!gameExist) {
        createdGames.push(this.create(game));
      }
    });

    return createdGames;
  }

  async findPerName(name: string): Promise<Game> {
    const game = await this.database.game.findFirst({
      where: { name: name },
    });
    return game;
  }
}
