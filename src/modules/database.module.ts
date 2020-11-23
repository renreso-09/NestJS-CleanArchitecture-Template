import { Module } from "@nestjs/common";
import SampleRepository from "src/repositories/sample.repository";

@Module({
  imports: [],
  exports: [
    SampleRepository
  ],
  providers: [
    SampleRepository
  ]
})

export class DatabaseModule{ }