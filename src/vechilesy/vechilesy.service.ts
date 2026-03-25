import { Injectable } from '@nestjs/common';
import { CreateVechilesyInput } from './dto/create-vechilesy.input';
import { UpdateVechilesyInput } from './dto/update-vechilesy.input';

@Injectable()
export class VechilesyService {
  create(createVechilesyInput: CreateVechilesyInput) {
    return 'This action adds a new vechilesy';
  }

  findAll() {
    return `This action returns all vechilesy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vechilesy`;
  }

  update(id: number, updateVechilesyInput: UpdateVechilesyInput) {
    return `This action updates a #${id} vechilesy`;
  }

  remove(id: number) {
    return `This action removes a #${id} vechilesy`;
  }
}
