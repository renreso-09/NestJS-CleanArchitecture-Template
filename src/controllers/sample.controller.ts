import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import SampleEntity from "src/entities/sample.entity";
import UpdateSampleRequest from "src/repositories/dto/updateSample.dto";
import DeleteSampleService from "src/usecases/sample/deleteSample.service";
import GetAllSampleService from "src/usecases/sample/getAllSample.service";
import GetSampleService from "src/usecases/sample/getSample.service";
import UpdateSampleService from "src/usecases/sample/updateSample.service";

@ApiTags("Sample")
@Controller("sample")
export default class SampleController {
  constructor (
    private readonly getSampleService: GetSampleService,
    private readonly getAllSampleService: GetAllSampleService,
    private readonly updateSampleService: UpdateSampleService,
    private readonly deleteSampleService: DeleteSampleService
  ) { }

  @Get(':id')
  @ApiOperation({
    description: "指定したidの情報を取得"
  })
  @ApiResponse({
    status: 200
  })
  async getOne(@Param('id') id: string): Promise<SampleEntity> {
    try {
      var result = await this.getSampleService.execute(id);
      return result;
    } catch (err) {
      throw err;
    }
  }

  @Get()
  @ApiOperation({
    description: "全ての情報を取得"
  })
  @ApiResponse({
    status: 200
  })
  async getAll(): Promise<SampleEntity[]> {
    try {
      var result = await this.getAllSampleService.execute();
      return result;
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  @ApiOperation({
    description: "指定したIdの情報を更新する"
  })
  @ApiResponse({
    status: 201
  })
  async update(@Param('id') id: string, @Body() request: UpdateSampleRequest): Promise<SampleEntity> {
    try {
      var result = await this.updateSampleService.execute(id, request);
      return result;
    } catch(err) {
      throw err;
    }
  }

  @Delete(':id')
  @ApiOperation({
    description: "指定したidの情報を削除する"
  })
  @ApiResponse({
    status: 201
  })
  async delete(@Param('id') id: string) {
    try {
      await this.deleteSampleService.execute(id);
    } catch (err) {
      throw err;
    }
  }
}