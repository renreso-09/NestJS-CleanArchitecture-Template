import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { SampleModule } from './modules/sample.module';

@Module({
  imports: [
    SampleModule,
    DatabaseModule
  ]
})
export class AppModule {}
