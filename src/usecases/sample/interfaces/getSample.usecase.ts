import SampleEntity from 'src/entities/sample.entity';

export default interface GetSampleUsecase {
  execute(id: string): Promise<SampleEntity>
}