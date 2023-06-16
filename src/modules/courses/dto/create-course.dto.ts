export class CreateCourseDto {
  subject: string;
  courseCode: string;
  section: string;
  title: string;
  startDate: Date;
  endDate: Date;
  time: string;
  credits: number;
  status: string;
  instructor: string;
  deliveryMethod: string;
  buildingRoom: string;
  classSize: number;
  enrolled: number;
  tuitionResident: number;
  tuitionNonResident: number;
  courseFees: number;
}
