import { AbstractTranslationDto } from '../../../common/dto/abstract.dto';
import { LanguageCode } from '../../../constants';
import { ApiEnumPropertyOptional } from '../../../decorators';
import type { CourseTranslationEntity } from '../course-translation.entity';

export class CourseTranslationDto extends AbstractTranslationDto {
  @ApiEnumPropertyOptional(() => LanguageCode)
  languageCode: LanguageCode;

  constructor(courseTranslationEntity: CourseTranslationEntity) {
    super(courseTranslationEntity);

    this.languageCode = courseTranslationEntity.languageCode;
  }
}
