import { Injectable } from "@nestjs/common";
import SampleEntity from "src/dto/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";
import ISamplePresenter from "./interfaces/sample.presenter.interface";

@Injectable()
export default class SamplePresenter implements ISamplePresenter {
  convertToEntity(request: SampleModel): SampleEntity {
    const response: SampleEntity = {
      id: request.id,
      name: request.name,
      age: request.age,
      description: request.description
    }

    return response;
  }
}