import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import type { PageDto } from '../../common/dto/page.dto';
import { Auth, UUIDParam } from '../../decorators';
import { CreateCourseDto } from './dtos/create-course.dto';
import type { CourseDto } from './dtos/course.dto';
import { CoursePageOptionsDto } from './dtos/course-page-options.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { CourseService } from './course.service';

@Controller('courses')
@ApiTags('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    const entity = await this.courseService.createCourse(createCourseDto);

    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAllCourse(@Query() coursePageOptionsDto: CoursePageOptionsDto): Promise<PageDto<CourseDto>> {
    return this.courseService.getAllCourse(coursePageOptionsDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingleCourse(@UUIDParam('id') id: Uuid): Promise<CourseDto> {
    const entity = await this.courseService.getSingleCourse(id);

    return entity.toDto();
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateCourse(
    @UUIDParam('id') id: Uuid,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<void> {
    return this.courseService.updateCourse(id, updateCourseDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteCourse(@UUIDParam('id') id: Uuid): Promise<void> {
    await this.courseService.deleteCourse(id);
  }
}
