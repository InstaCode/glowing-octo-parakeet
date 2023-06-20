import { Repository } from 'typeorm';

import type { CourseEntity } from './course.entity';

export class CourseRepository extends Repository<CourseEntity> {}
