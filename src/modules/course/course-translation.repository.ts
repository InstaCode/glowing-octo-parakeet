import { Repository } from 'typeorm';

import type { CourseTranslationEntity } from './course-translation.entity';

export class CourseTranslationRepository extends Repository<CourseTranslationEntity> {}
