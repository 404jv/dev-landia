import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from './Activity';

@Entity('tips')
class Tip {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  activity_id: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Activity, (activity) => activity.tips)
  @JoinColumn({ name: 'activity_id' })
  activity: Activity;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tip };
