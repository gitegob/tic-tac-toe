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

  /**
   * Check if there is a win or tie on the board state
   * @param board Current board state
   * @returns x, o, tie, or incomplete
   */
  checkBoard(board: string): 'x' | 'o' | 'tie' | 'incomplete' {
    board = board.replace(/\+/g, ' ');
    // Positions that are a win
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // Check for a win (If x or o has 3 in a row)
    for (const [a, b, c] of winConditions) {
      if (board[a] !== ' ' && board[a] === board[b] && board[b] === board[c]) {
        return `${board[a]}` as 'x' | 'o';
      }
    }
    if (board.indexOf(' ') === -1) {
      return 'tie';
    }
    return 'incomplete';
  }

  /**
   * Returns the winner or tie
   * @param board current board
   * @returns string
   */
  checkForWinner(board: string): string {
    const boardState = this.checkBoard(board);
    if (boardState === 'x' || boardState === 'o') return `${boardState} wins`;
    if (boardState === 'tie') return 'tie';
  }
}
