import CreateSampleRequest from 'src/dto/createSample.request.dto';
import SampleEntity from 'src/dto/entities/sample.entity';

export default interface CreateSampleUsecase {
  execute(request: CreateSampleRequest): Promise<SampleEntity>
}