import { TaskStatus } from "../task.entity";
import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    description: string;
}

export class UpdateTaskDto{
    @IsString()
    title?: string;
    @IsString()
    description?: string;
    @IsString()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status: TaskStatus;
}