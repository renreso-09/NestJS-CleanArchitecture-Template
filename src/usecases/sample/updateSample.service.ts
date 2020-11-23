import { Inject, Injectable } from "@nestjs/common";
import { request } from "express";
import SampleEntity from "src/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "src/presenters/interfaces/sample.presenter.usecase";
import SamplePresenter from "src/presenters/sample.presenter";
import UpdateSampleRequest from "src/repositories/dto/updateSample.dto";
import ISampleRepository from "src/repositories/interfaces/sample.repository.interface";
import SampleRepository from "src/repositories/sample.repository";
import IUpdateSampleService from "./interfaces/updateSample.interface";

@Injectable()
export default class UpdateSampleService implements IUpdateSampleService {
  constructor (
    @Inject(SampleRepository)
    private SampleRepository : ISampleRepository,

    @Inject(SamplePresenter)
    private SamplePresenter : ISamplePresenter
  ) {}

  async execute(id: string, request: UpdateSampleRequest) : Promise<SampleEntity> {
    const updateSample : SampleModel = await this.SampleRepository.updateSample(id, request);
    const response : SampleEntity = await this.SamplePresenter.convertToEntity(updateSample);
    return response;
  }
}