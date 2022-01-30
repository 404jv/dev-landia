import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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
}

export { Tip };
