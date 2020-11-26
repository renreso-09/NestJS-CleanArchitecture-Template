import { ApiProperty } from "@nestjs/swagger";

export default class SampleEntity {
	@ApiProperty({
		example: "b911fec0-163e-4d83-afc0-f122e70be8db",
		type: String
	})
	id: string;

	@ApiProperty({
		example: "name",
		type: String
	})
	name: string;

	@ApiProperty({
		example: 100,
		type: Number
	})
	age: number;

	@ApiProperty({
		example: "description",
		type: String
	})
	description: string;
}