import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { SampleModel } from 'src/models/sample.model';
import UpdateSampleRequest from './dto/updateSample.dto';
import ISampleRepository from './interfaces/sample.repository.interface';

@Injectable()
export default class SampleRepository implements ISampleRepository {
  async getOneSample(id: string): Promise<SampleModel> {
    // Sample Response
    const response = {
      id: "38529d80-02fc-4a62-a3ce-f6577830054d",
      name: "SampleName",
      age: 100,
      description: "SampleDescription",
      createdTime: moment().unix(),
      updatedTime: moment().unix()
    }

    return response;
  }

  async getAllSample(): Promise<SampleModel[]> {
    // Sample Response
    const response = [];
    response.push(
      {
        id: "38529d80-02fc-4a62-a3ce-f6577830054d",
        name: "SampleName",
        age: 100,
        description: "SampleDescription",
        createdTime: moment().unix(),
        updatedTime: moment().unix()
      }
    );

    return response;
  }

  async updateSample(id: string, request: UpdateSampleRequest): Promise<SampleModel> {
    // Sample Response
    const response = {
      id: id,
      name: request.name,
      age: request.age,
      description: request.description,
      createdTime: moment().unix(),
      updatedTime: moment().unix()
    }

    return response;
  }

  async deleteSample(id: string) {
    return;
  }
}