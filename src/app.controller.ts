import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BoardDto } from './dto/board.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  playTicTacToe(@Query() { board }: BoardDto): string {
    if (!this.appService.validBoard(board)) {
      throw new HttpException('Invalid board', HttpStatus.BAD_REQUEST);
    }
    if (this.appService.nextTurn(board) !== 'o') {
      throw new BadRequestException("Not o's turn");
    }
    const newBoard = this.appService.makeMove(board);
    return newBoard;
  }
}
