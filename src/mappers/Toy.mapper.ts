import { Toy } from '../model/Toy.model';
import { ToyBuilder } from '../model/builders/Toy.builder';
import { IMapper } from './IMapper';

export class ToyXmlMapper implements IMapper<any, Toy> {
  map(data: any): Toy {
    return ToyBuilder.newBuilder()
      .setType(data.type)
      .setAgeGroup(data.ageGroup)
      .setBrand(data.brand)
      .setMaterial(data.material)
      .setBatteryRequired(data.batteryRequired === true)
      .setEducational(data.educational === true)
      .build();
  }
}
