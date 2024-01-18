import { Body, Controller, Get, Post} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: any){
        // this.tasksService.createTasks()
        console.log(newTask);
        return 'guardando...';
    }
}