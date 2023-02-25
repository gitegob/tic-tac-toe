import { IsString, Length } from 'class-validator';

export class BoardDto {
  @IsString({ message: 'board must be provided' })
  @Length(9, 9, { message: 'Board must be 9 characters' })
  board: string;
}
