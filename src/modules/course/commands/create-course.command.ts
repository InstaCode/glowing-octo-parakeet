import type { ICommand, ICommandHandler } from '@nestjs/cqrs';
import { CommandHandler } from '@nestjs/cqrs';
import { find } from 'lodash';

import type { CreateCourseDto } from '../dtos/create-course.dto';
import type { CourseEntity } from '../course.entity';
import { CourseRepository } from '../course.repository';
import type { CourseTranslationEntity } from '../course-translation.entity';
import { CourseTranslationRepository } from '../course-translation.repository';

export class CreateCourseCommand implements ICommand {
  constructor(public readonly createCourseDto: CreateCourseDto) {}
}

@CommandHandler(CreateCourseCommand)
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand, CourseEntity>
{
  constructor(
    private courseRepository: CourseRepository,
    private courseTranslationRepository: CourseTranslationRepository,
  ) {}

  async execute(command: CreateCourseCommand) {
    const { createCourseDto } = command;
    const courseEntity = this.courseRepository.create();
    const translations: CourseTranslationEntity[] = [];

    await this.courseRepository.save(courseEntity);

    // FIXME: Create generic function for translation creation
    for (const createTranslationDto of createCourseDto.title) {
      const languageCode = createTranslationDto.languageCode;
      const translationEntity = this.courseTranslationRepository.create({
        courseId: courseEntity.id,
        languageCode,
        title: createTranslationDto.text,
        description: find(createCourseDto.description, {
          languageCode,
        })!.text,
      });

      translations.push(translationEntity);
    }

    await this.courseTranslationRepository.save(translations);

    courseEntity.translations = translations;

    return courseEntity;
  }
}
