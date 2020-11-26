import SampleEntity from 'src/dto/entities/sample.entity';

export default interface GetSampleUsecase {
  execute(id: string): Promise<SampleEntity>
}