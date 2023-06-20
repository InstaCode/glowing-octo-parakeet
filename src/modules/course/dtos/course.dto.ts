import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { DynamicTranslate } from '../../../decorators';
import type { CourseEntity } from '../course.entity';

export class CourseDto extends AbstractDto {
  @ApiPropertyOptional()
  @DynamicTranslate()
  systemId: number;

  subject: string;

  courseCode: string;

  @ApiPropertyOptional()
  section: string;

  title: string;

  @ApiPropertyOptional()
  credits: number;

  constructor(entityName: CourseEntity) {
    super(entityName);
  }
}
