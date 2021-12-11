import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('phase_activity')
class PhaseActivity {
  @PrimaryColumn()
  id: string;

  @Column()
  phase_id: string;

  @Column()
  activity_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { PhaseActivity };
