import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractTranslationEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators';
import { CourseEntity } from './course.entity';
import { CourseTranslationDto } from './dtos/course-translation.dto';

@Entity({ name: 'course_translations' })
@UseDto(CourseTranslationDto)
export class CourseTranslationEntity extends AbstractTranslationEntity<CourseTranslationDto> {
  @Column({ type: 'uuid' })
  courseId: Uuid;

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

  @ManyToOne(() => CourseEntity, (courseEntity) => courseEntity.translations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;
}
