import SampleEntity from "src/entities/sample.entity";
import UpdateSampleRequest from "src/repositories/dto/updateSample.dto";

export default interface IUpdateSampleService {
  execute(id: string, request: UpdateSampleRequest): Promise<SampleEntity>
}