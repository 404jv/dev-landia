import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Option } from './Option';

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

  @Column()
  phase_id: string;

  @Column({ type: 'enum', enum: enActivityType })
  type: enActivityType;

  @Column()
  is_needed_code: boolean;

  @Column()
  order: number;

  @OneToMany(() => Option, (option) => option.activity)
  options: Option[];

  @OneToMany(() => Option, (option) => option.activity)
  default_code: Option[];

  @OneToMany(() => Option, (option) => option.activity)
  activity_answer: Option[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Activity };
