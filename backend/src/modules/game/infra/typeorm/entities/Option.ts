import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

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
