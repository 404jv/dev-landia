import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('activity_answer')
class ActivityAnswer {
  @PrimaryColumn()
  id: string;

  @Column()
  activity_id: string;

  @Column()
  option_id: string;

  @Column()
  order: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ActivityAnswer };
