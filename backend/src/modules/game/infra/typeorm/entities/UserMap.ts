import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Map } from '@modules/maps/infra/typeorm/entities/Map';

@Entity('user_map')
class UserMap {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  map_id: string;

  @OneToOne(() => Map)
  @JoinColumn({ name: 'map_id' })
  map: Map;

  @Column()
  is_done: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserMap };
