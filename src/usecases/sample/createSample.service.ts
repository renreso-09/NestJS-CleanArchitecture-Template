import { Inject, Injectable } from "@nestjs/common";
import CreateSampleRequest from "src/dto/createSample.request.dto";
import SampleEntity from "src/dto/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "src/presenters/interfaces/sample.presenter.interface";
import SamplePresenter from "src/presenters/sample.presenter";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import CreateSampleUsecase from "./interfaces/createSample.usecase";

@Injectable()
export default class CreateSampleService implements CreateSampleUsecase {
  constructor(
    @Inject(SampleRepository)
    private readonly sampleRepository: ISampleRepository,

    @Inject(SamplePresenter)
    private readonly samplePresenter: ISamplePresenter
  ) { }
  async execute(request: CreateSampleRequest): Promise<SampleEntity> {
    const response: SampleModel = await this.sampleRepository.createSample(request);
    const result: SampleEntity = this.samplePresenter.convertToEntity(response);

    return result;
  }
}