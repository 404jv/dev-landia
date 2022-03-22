import { UserPhase } from '../infra/typeorm/entities/UserPhase';

interface IUsersPhasesRepository {
  create(user_id: string, phase_id: string): Promise<void>;
  findByUserAndPhase(user_id: string, phase_id: string): Promise<UserPhase>;
  update(userPhase: UserPhase): Promise<UserPhase>;
}

export { IUsersPhasesRepository };
