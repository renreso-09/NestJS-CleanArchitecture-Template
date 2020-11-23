import { Inject, Injectable } from "@nestjs/common";
import { sample } from "rxjs-compat/operator/sample";
import SampleEntity from "src/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "src/presenters/interfaces/sample.presenter.usecase";
import SamplePresenter from "src/presenters/sample.presenter";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import IGetAllSampleService from "./interfaces/getAllSamples.interfaces";

@Injectable()
export default class GetAllSampleService implements IGetAllSampleService {
  constructor(
    @Inject(SampleRepository)
    private SampleRepository : ISampleRepository,

    @Inject(SamplePresenter)
    private SamplePresenter : ISamplePresenter
  ) {}

  async execute() : Promise<SampleEntity[]> {
    const sampleModel: SampleModel[] = await this.SampleRepository.getAllSample();
    console.log(sampleModel);
    const response: SampleEntity[] = sampleModel.map(x => this.SamplePresenter.convertToEntity(x));
    return response;
  }
}