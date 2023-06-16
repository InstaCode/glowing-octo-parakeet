import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('courses')
@ApiTags('Courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Creates a new course' })
  @ApiBody({ type: CreateCourseDto })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieves all courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retrieves a course by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Course ID' })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Updates a course by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Course ID' })
  @ApiBody({ type: UpdateCourseDto })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Deletes a course by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Course ID' })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
