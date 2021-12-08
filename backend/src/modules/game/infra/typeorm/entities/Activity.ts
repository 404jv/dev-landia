import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

@Entity('activities')
class Activity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: enActivityType })
  type: enActivityType;

  @Column()
  is_needed_code: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Activity };
