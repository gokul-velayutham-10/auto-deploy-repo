import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { UsersModule } from './users/users.module';
import { VechilesyModule } from './vechilesy/vechilesy.module';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [AnimalsModule, UsersModule, VechilesyModule, FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
