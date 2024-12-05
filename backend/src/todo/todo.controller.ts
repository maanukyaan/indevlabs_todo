import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // Получить все задачи
  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  // Добавить новую задачу
  @Post()
  async addTodo(@Body('text') text: string): Promise<Todo> {
    return this.todoService.addTodo(text);
  }

  // Удалить задачу
  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    return this.todoService.deleteTodo(id);
  }

  // Обновить статус задачи (выполнено/невыполнено)
  @Post(':id/toggle')
  async toggleComplete(@Param('id') id: number): Promise<Todo> {
    return this.todoService.toggleComplete(id);
  }
}
