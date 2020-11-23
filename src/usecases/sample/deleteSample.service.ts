import { Inject, Injectable } from "@nestjs/common";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import IDeleteSampleService from "./interfaces/deleteSample.interface";

@Injectable()
export default class DeleteSampleService implements IDeleteSampleService {
  constructor (
    @Inject(SampleRepository)
    private SampleRepository : ISampleRepository
  ) {}

  async execute(id: string) {
    await this.SampleRepository.deleteSample(id);
    return;
  }
}