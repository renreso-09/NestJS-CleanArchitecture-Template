import CreateSampleRequest from 'src/dto/createSample.request.dto';
import { SampleModel } from 'src/models/sample.model';
import UpdateSampleRequest from '../../dto/updateSample.dto';

export default interface ISampleRepository {
	// 全ての情報を取得
	getAllSample(): Promise<SampleModel[]>;

	// 指定したidの情報を取得
	getOneSample(id: string): Promise<SampleModel>;

	// 指定したidの情報を更新
	updateSample(id: string, request: UpdateSampleRequest): Promise<SampleModel>;

	// 指定したidの情報を削除
	deleteSample(id: string);

	createSample(request: CreateSampleRequest): Promise<SampleModel>;
}