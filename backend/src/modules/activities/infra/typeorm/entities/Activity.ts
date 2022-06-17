import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';

import { Option } from './Option';
import { Tip } from './Tip';

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

  @Column()
  hexadecimal_color: string;

  @ManyToOne(() => Phase, (phase) => phase.activities)
  @JoinColumn({ name: 'phase_id' })
  phase: Phase;

  @OneToMany(() => Tip, (tip) => tip.activity)
  tips: Tip[];

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
