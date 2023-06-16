import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('course-data-clean')
export class Datum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  courseCode: string;

  @Column()
  section: string;

  @Column()
  title: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  time: string;

  @Column()
  credits: number;

  @Column()
  status: string;

  @Column()
  instructor: string;

  @Column()
  deliveryMethod: string;

  @Column()
  buildingRoom: string;

  @Column()
  classSize: number;

  @Column()
  enrolled: number;

  @Column()
  tuitionResident: number;

  @Column()
  tuitionNonResident: number;

  @Column()
  courseFees: number;
}
