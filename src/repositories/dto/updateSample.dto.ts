import { ApiProperty } from "@nestjs/swagger";

export default class UpdateSampleRequest {
  @ApiProperty({
    example: "SampleName",
    type: String
  })
  name: string;

  @ApiProperty({
    example: 100,
    type: Number
  })
  age: number;

  @ApiProperty({
    example: "SampleDescription",
    type: String
  })
  description: string;
}