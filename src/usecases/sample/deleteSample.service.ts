import { Inject, Injectable } from "@nestjs/common";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import DeleteSampleUsecase from "./interfaces/deleteSample.usecase";

@Injectable()
export default class DeleteSampleService implements DeleteSampleUsecase {
  constructor(
    @Inject(SampleRepository)
    private SampleRepository: ISampleRepository
  ) { }

  async execute(id: string) {
    await this.SampleRepository.deleteSample(id);
    return;
  }
}