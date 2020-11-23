import SampleEntity from 'src/entities/sample.entity';

export default interface IGetSampleService {
  execute(id: string): Promise<SampleEntity>
}