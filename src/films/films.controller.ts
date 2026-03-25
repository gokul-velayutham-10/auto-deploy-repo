import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller()
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @MessagePattern('createFilm')
  create(@Payload() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @MessagePattern('findAllFilms')
  findAll() {
    return this.filmsService.findAll();
  }

  @MessagePattern('findOneFilm')
  findOne(@Payload() id: number) {
    return this.filmsService.findOne(id);
  }

  @MessagePattern('updateFilm')
  update(@Payload() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(updateFilmDto.id, updateFilmDto);
  }

  @MessagePattern('removeFilm')
  remove(@Payload() id: number) {
    return this.filmsService.remove(id);
  }
}
