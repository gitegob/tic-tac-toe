import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Validates the board string
   * @param board current board state
   * @returns boolean
   */
  validBoard(board: string): boolean {
    board = board.replace(/\+/g, ' ');
    if (board.length !== 9) {
      return false;
    }
    for (const char of board) {
      if (char !== ' ' && char !== 'o' && char !== 'x') {
        return false;
      }
    }
    return true;
  }

  /**
   * Determines the next turn
   * @param board current board state
   * @returns x or o
   */
  nextTurn(board: string): 'x' | 'o' {
    const xCount = (board.match(/x/g) || []).length;
    const oCount = (board.match(/o/g) || []).length;
    return xCount === oCount ? 'o' : 'x';
  }

  /**
   * Make a move
   * @param board current board state
   * @returns new board string
   */
  makeMove(board: string): string {
    const nextMove = board.indexOf(' ');
    return board.slice(0, nextMove) + 'o' + board.slice(nextMove + 1);
  }
}
