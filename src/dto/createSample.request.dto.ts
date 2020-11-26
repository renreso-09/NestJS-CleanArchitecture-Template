import { ApiProperty } from "@nestjs/swagger";

export default class CreateSampleRequest {
  @ApiProperty({
    example: "sample name",
    type: String
  })
  name: string;

  @ApiProperty({
    example: 20,
    type: Number
  })
  age: number;

  @ApiProperty({
    example: "sample description",
    type: String
  })
  description: string;
}