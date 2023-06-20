import type { ICommand, IQueryHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';

import { CourseRepository } from '../course.repository';

export class GetCourseQuery implements ICommand {
  constructor(
    public readonly userId: Uuid,
  ) {}
}

@QueryHandler(GetCourseQuery)
export class GetCourseHandler implements IQueryHandler<GetCourseQuery> {
  constructor(private courseRepository: CourseRepository) {}

  async execute(query: GetCourseQuery) {
    return this.courseRepository.find({
      userId: query.userId,
    });
  }
}
