import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';

@Entity('users_phases')
class UserPhase {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  phase_id: string;

  @OneToOne(() => Phase)
  @JoinColumn({ name: 'phase_id' })
  phase: Phase;

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
