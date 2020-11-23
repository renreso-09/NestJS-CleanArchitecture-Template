import SampleEntity from "src/entities/sample.entity";
import { SampleModel } from "src/models/sample.model";

export default interface ISamplePresenter {
  convertToEntity(request: SampleModel): SampleEntity;
}