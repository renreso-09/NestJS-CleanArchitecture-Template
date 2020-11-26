import SampleEntity from "src/entities/sample.entity";

export default interface GetAllSampleUsecase {
  execute(id: string): Promise<SampleEntity[]>
}