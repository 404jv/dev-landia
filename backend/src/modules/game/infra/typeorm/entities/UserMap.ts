import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('user_map')
class UserMap {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  map_id: string;

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
