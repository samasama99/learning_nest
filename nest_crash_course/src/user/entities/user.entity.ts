import { ApiProperty } from "@nestjs/swagger";
import { IsInt, MaxLength, MinLength } from "class-validator";

export class User {
    @IsInt()
    @ApiProperty()
    id: number;

    @ApiProperty()
    @MaxLength(10)
    @MinLength(5)
    name: string;
} 
