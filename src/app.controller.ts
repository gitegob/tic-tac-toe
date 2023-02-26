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
    // Check for win or tie after user move
    const winOrTieUser = this.appService.checkForWinner(board);
    if (winOrTieUser) return winOrTieUser;
    if (this.appService.nextTurn(board) !== 'o') {
      throw new BadRequestException("It's not o's turn");
    }
    const nextBoard = this.appService.makeMove(board);
    // Check for win or tie after server move
    const winOrTieServer = this.appService.checkForWinner(nextBoard);
    if (winOrTieServer) return winOrTieServer;
    return nextBoard;
  }
}
