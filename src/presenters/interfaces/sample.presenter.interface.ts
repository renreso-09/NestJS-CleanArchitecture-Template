import SampleEntity from "src/dto/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";

export default interface ISamplePresenter {
  convertToEntity(request: SampleModel): SampleEntity;
}