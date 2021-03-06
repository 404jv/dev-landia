import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { UserMap } from '@modules/game/infra/typeorm/entities/UserMap';

import { Phase } from '../../../../phases/infra/typeorm/entities/Phase';

@Entity('maps')
class Map {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  order: number;

  @OneToMany(() => Phase, (phase) => phase.map)
  phases: Phase[];

  @OneToOne(() => UserMap, (userMap) => userMap.map)
  userMap: UserMap;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Map };
