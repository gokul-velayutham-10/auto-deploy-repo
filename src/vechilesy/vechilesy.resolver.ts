import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VechilesyService } from './vechilesy.service';
import { CreateVechilesyInput } from './dto/create-vechilesy.input';
import { UpdateVechilesyInput } from './dto/update-vechilesy.input';

@Resolver('Vechilesy')
export class VechilesyResolver {
  constructor(private readonly vechilesyService: VechilesyService) {}

  @Mutation('createVechilesy')
  create(@Args('createVechilesyInput') createVechilesyInput: CreateVechilesyInput) {
    return this.vechilesyService.create(createVechilesyInput);
  }

  @Query('vechilesy')
  findAll() {
    return this.vechilesyService.findAll();
  }

  @Query('vechilesy')
  findOne(@Args('id') id: number) {
    return this.vechilesyService.findOne(id);
  }

  @Mutation('updateVechilesy')
  update(@Args('updateVechilesyInput') updateVechilesyInput: UpdateVechilesyInput) {
    return this.vechilesyService.update(updateVechilesyInput.id, updateVechilesyInput);
  }

  @Mutation('removeVechilesy')
  remove(@Args('id') id: number) {
    return this.vechilesyService.remove(id);
  }
}
