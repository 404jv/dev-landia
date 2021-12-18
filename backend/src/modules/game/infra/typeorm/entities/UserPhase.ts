import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users_phases')
class UserPhase {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  phase_id: string;

  @Column()
  current_level: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserPhase };
