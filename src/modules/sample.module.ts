import { Controller, Module } from "@nestjs/common";
import SampleController from "src/controllers/sample.controller";
import SamplePresenter from "src/presenters/sample.presenter";
import CreateSampleService from "src/usecases/sample/createSample.service";
import DeleteSampleService from "src/usecases/sample/deleteSample.service";
import GetAllSampleService from "src/usecases/sample/getAllSample.service";
import GetSampleService from "src/usecases/sample/getSample.service";
import UpdateSampleService from "src/usecases/sample/updateSample.service";
import { DatabaseModule } from "./database.module";

@Module({
  controllers: [SampleController],
  imports: [
    DatabaseModule
  ],
  providers: [
    GetAllSampleService,
    GetSampleService,
    UpdateSampleService,
    DeleteSampleService,
    CreateSampleService,
    SamplePresenter
  ]
})

export class SampleModule { }