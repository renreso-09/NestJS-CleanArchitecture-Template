import SampleEntity from "src/dto/entities/sample.entity";
import UpdateSampleRequest from "src/dto/updateSample.dto";

export default interface UpdateSampleUsecase {
  execute(id: string, request: UpdateSampleRequest): Promise<SampleEntity>
}