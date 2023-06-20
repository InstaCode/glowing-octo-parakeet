import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateCourseHandler } from './commands/create-course.command';
import { CourseController } from './course.controller';
import { CourseRepository } from './course.repository';
import { CourseTranslationRepository } from './course-translation.repository';
import { CourseService } from './course.service';
import { GetCourseHandler } from './queries/get-course.query';

export const handlers = [
CreateCourseHandler,
GetCourseHandler,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseRepository, CourseTranslationRepository]),
  ],
  providers: [CourseService, ...handlers],
  controllers: [CourseController],
})
export class CourseModule {}
