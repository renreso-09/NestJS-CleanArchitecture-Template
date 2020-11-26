import SampleEntity from "src/entities/sample.entity";
import UpdateSampleRequest from "src/repositories/dto/updateSample.dto";

export default interface UpdateSampleUsecase {
  execute(id: string, request: UpdateSampleRequest): Promise<SampleEntity>
}