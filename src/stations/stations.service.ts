import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationsService {
  constructor(private readonly db: PrismaService) {}

  create(createStationDto: CreateStationDto) {
    return this.db.station.create({
      data: createStationDto,
    })
  }

  findAll() {
    return this.db.station.findMany();
  }

  findOne(id: number) {
    return this.db.station.findUnique({
      where: { id }
    });
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.db.station.update({
      where: { id },
	  data: updateStationDto
    });
  }

  remove(id: number) {
    return this.db.station.delete({
      where: { id }
    });
  }

}
