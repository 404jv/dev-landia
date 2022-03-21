import { Map } from '@modules/maps/infra/typeorm/entities/Map';
import { MapsRepository } from '@modules/maps/infra/typeorm/repositories/MapsRepository';

export async function createMap(): Promise<Map> {
  const mapsRepository = new MapsRepository();

  const map = await mapsRepository.create({
    description: 'Map Test',
    title: 'Map test',
    order: 1,
  });

  return map;
}
