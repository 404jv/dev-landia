import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { UserPhase } from '@modules/game/infra/typeorm/entities/UserPhase';

import { Activity } from '../../../../activities/infra/typeorm/entities/Activity';
import { Map } from '../../../../maps/infra/typeorm/entities/Map';

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

@Entity('phases')
class Phase {
  @PrimaryColumn()
  id: string;

  @Column()
  map_id: string;

  @ManyToOne(() => Map, (phase) => phase.phases)
  @JoinColumn({ name: 'map_id' })
  map: Map;

  @Column()
  title: string;

  @Column({ type: 'enum', enum: enType })
  type: enType;

  @Column()
  markdown_text: string;

  @Column()
  max_level: number;

  @Column()
  order: number;

  @OneToMany(() => Activity, (activity) => activity.phase)
  @JoinColumn()
  activities: Activity[];

  @OneToOne(() => UserPhase, (UserPhase) => UserPhase.phase)
  userPhase: UserPhase;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Phase };
