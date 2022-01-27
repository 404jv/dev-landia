import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { ActivityDefaultCode } from './ActivityDefaultCode';
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

  @Column({ type: 'enum', enum: enActivityType })
  type: enActivityType;

  @Column()
  is_needed_code: boolean;

  @Column()
  order: number;

  @OneToMany(() => Option, (option) => option.activity)
  options: Option[];

  @ManyToMany(() => Option)
  @JoinTable({
    name: 'activity_default_code',
    joinColumns: [{ name: 'activity_id' }],
    inverseJoinColumns: [{ name: 'option_id' }],
  })
  default_code: Option[];

  @ManyToMany(() => Option)
  @JoinTable({
    name: 'activity_answer',
    joinColumns: [{ name: 'activity_id' }],
    inverseJoinColumns: [{ name: 'option_id' }],
  })
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
