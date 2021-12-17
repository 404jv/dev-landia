import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from './Activity';

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

@Entity('options')
class Option {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  activity_id: string;

  @ManyToOne(() => Activity, (activity) => activity.options)
  @JoinColumn({ name: 'activity_id' })
  activity: Activity;

  @Column({ type: 'enum', enum: enOptionType })
  type: string;

  @Column()
  hexadecimal_color: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Option };
