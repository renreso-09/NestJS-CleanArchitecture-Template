import SampleEntity from "src/dto/entities/sample.entity";

export default interface GetAllSampleUsecase {
  execute(id: string): Promise<SampleEntity[]>
}