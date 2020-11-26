import { Inject, Injectable } from "@nestjs/common";
import SampleEntity from "src/dto/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "src/presenters/interfaces/sample.presenter.interface";
import SamplePresenter from "src/presenters/sample.presenter";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import GetSampleUsecase from "./interfaces/getSample.usecase";

@Injectable()
export default class GetSampleService implements GetSampleUsecase {
  constructor(
    @Inject(SampleRepository)
    private SampleRepository: ISampleRepository,

    @Inject(SamplePresenter)
    private SamplePresenter: ISamplePresenter
  ) { }

  async execute(id: string): Promise<SampleEntity> {
    const sampleModel: SampleModel = await this.SampleRepository.getOneSample(id);
    const response: SampleEntity = this.SamplePresenter.convertToEntity(sampleModel);
    return response;
  }
}