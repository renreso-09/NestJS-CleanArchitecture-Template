import { Inject, Injectable } from "@nestjs/common";
import SampleEntity from "src/dto/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "src/presenters/interfaces/sample.presenter.interface";
import SamplePresenter from "src/presenters/sample.presenter";
import UpdateSampleRequest from "src/dto/updateSample.dto";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import UpdateSampleUsecase from "./interfaces/updateSample.usecase";

@Injectable()
export default class UpdateSampleService implements UpdateSampleUsecase {
  constructor(
    @Inject(SampleRepository)
    private SampleRepository: ISampleRepository,

    @Inject(SamplePresenter)
    private SamplePresenter: ISamplePresenter
  ) { }

  async execute(id: string, request: UpdateSampleRequest): Promise<SampleEntity> {
    const updateSample: SampleModel = await this.SampleRepository.updateSample(id, request);
    const response: SampleEntity = await this.SamplePresenter.convertToEntity(updateSample);
    return response;
  }
}