import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators';
import { CourseTranslationEntity } from './course-translation.entity';
import type { ICourseDtoOptions } from './dtos/course.dto';
import { CourseDto } from './dtos/course.dto';

@Entity({ name: 'courses' })
@UseDto(CourseDto)
export class CourseEntity extends AbstractEntity<CourseDto, ICourseDtoOptions> {
  @OneToMany(
    () => CourseTranslationEntity,
    (courseTranslationEntity) => courseTranslationEntity.course,
  )
  translations: CourseTranslationEntity[];

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
