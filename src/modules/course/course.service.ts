import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Transactional } from 'typeorm-transactional';

import type { PageDto } from '../../common/dto/page.dto';
import { ValidatorService } from '../../shared/services/validator.service';
import { CreateCourseCommand } from './commands/create-course.command';
import type { CourseDto } from './dtos/course.dto';
import type { CoursePageOptionsDto } from './dtos/course-page-options.dto';
import { CourseNotFoundException } from './exceptions/course-not-found.exception';
import type { CourseEntity } from './course.entity';
import { CourseRepository } from './course.repository';
import { CreateCourseDto } from './dtos/create-course.dto';
import type { UpdateCourseDto } from './dtos/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    private courseRepository: CourseRepository,
    private validatorService: ValidatorService,
    private commandBus: CommandBus,
  ) {}

  @Transactional()
  createCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
    return this.commandBus.execute<CreateCourseCommand, CourseEntity>(
      new CreateCourseCommand(createCourseDto),
    );
  }

  async getAllCourse(
    coursePageOptionsDto: CoursePageOptionsDto,
  ): Promise<PageDto<CourseDto>> {
    const queryBuilder = this.courseRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.translations', 'courseTranslation');
    const [items, pageMetaDto] = await queryBuilder.paginate(coursePageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getSingleCourse(id: Uuid): Promise<CourseEntity> {
    const queryBuilder = this.courseRepository
      .createQueryBuilder('course')
      .where('course.id = :id', { id });

    const courseEntity = await queryBuilder.getOne();

    if (!courseEntity) {
      throw new CourseNotFoundException();
    }

    return courseEntity;
  }

  async updateCourse(
    id: Uuid,
    updateCourseDto: UpdateCourseDto,
  ): Promise<void> {
    const queryBuilder = this.courseRepository
      .createQueryBuilder('course')
      .where('course.id = :id', { id });

    const courseEntity = await queryBuilder.getOne();

    if (!courseEntity) {
      throw new CourseNotFoundException();
    }

    this.courseRepository.merge(courseEntity, updateCourseDto);

    await this.courseRepository.save(updateCourseDto);
  }

  async deleteCourse(id: Uuid): Promise<void> {
    const queryBuilder = this.courseRepository
      .createQueryBuilder('course')
      .where('course.id = :id', { id });

    const courseEntity = await queryBuilder.getOne();

    if (!courseEntity) {
      throw new CourseNotFoundException();
    }

    await this.courseRepository.remove(courseEntity);
  }
}
