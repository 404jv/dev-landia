import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Map } from './Map';

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

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Phase };
