import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import CreateSampleRequest from "src/dto/createSample.request.dto";
import SampleEntity from "src/dto/entities/sample.entity";
import UpdateSampleRequest from "src/dto/updateSample.dto";
import CreateSampleService from "src/usecases/sample/createSample.service";
import DeleteSampleService from "src/usecases/sample/deleteSample.service";
import GetAllSampleService from "src/usecases/sample/getAllSample.service";
import GetSampleService from "src/usecases/sample/getSample.service";
import UpdateSampleService from "src/usecases/sample/updateSample.service";

@ApiTags("Sample")
@Controller("sample")
export default class SampleController {
  constructor(
    private readonly getSampleService: GetSampleService,
    private readonly getAllSampleService: GetAllSampleService,
    private readonly updateSampleService: UpdateSampleService,
    private readonly deleteSampleService: DeleteSampleService,
    private readonly createSampleService: CreateSampleService
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

  @Post()
  @ApiOperation({
    description: "情報を新規登録"
  })
  @ApiResponse({
    status: 201
  })
  async create(@Body() request: CreateSampleRequest): Promise<SampleEntity> {
    try {
      var result = await this.createSampleService.execute(request);
      return result;
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  @ApiOperation({
    description: "指定したIdの情報を更新"
  })
  @ApiResponse({
    status: 201
  })
  async update(@Param('id') id: string, @Body() request: UpdateSampleRequest): Promise<SampleEntity> {
    try {
      var result = await this.updateSampleService.execute(id, request);
      return result;
    } catch (err) {
      throw err;
    }
  }

  @Delete(':id')
  @ApiOperation({
    description: "指定したidの情報を削除"
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