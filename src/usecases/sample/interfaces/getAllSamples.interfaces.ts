import SampleEntity from "src/entities/sample.entity";

export default interface IGetAllSampleService {
  execute(id: string): Promise<SampleEntity[]>
}