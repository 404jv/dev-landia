import { Tip } from '../infra/typeorm/entities/Tip';

interface ITipsRepository {
  create(name: string, activity_id: string): Promise<Tip>;
  deleteByActivityId(id: string): Promise<void>;
}

export { ITipsRepository };
