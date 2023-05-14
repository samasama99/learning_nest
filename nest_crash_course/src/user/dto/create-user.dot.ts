import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @MaxLength(10)
    @MinLength(5)
    name: string;
}
