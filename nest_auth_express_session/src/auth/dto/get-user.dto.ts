import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
    @ApiProperty()
    name: string;
}
