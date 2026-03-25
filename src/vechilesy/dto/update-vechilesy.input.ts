import { CreateVechilesyInput } from './create-vechilesy.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVechilesyInput extends PartialType(CreateVechilesyInput) {
  id: number;
}
