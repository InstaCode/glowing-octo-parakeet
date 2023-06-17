import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';

@Entity('course')
export class Course extends AbstractEntity<Course> {
  @Column()
  systemId: number;

  @Column()
  subject: string;

  @Column()
  courseCode: string;

  @Column()
  section: string;

  @Column()
  title: string;

  @Column()
  credits: number;
}
