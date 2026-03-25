import { Module } from '@nestjs/common';
import { VechilesyService } from './vechilesy.service';
import { VechilesyResolver } from './vechilesy.resolver';

@Module({
  providers: [VechilesyResolver, VechilesyService],
})
export class VechilesyModule {}
