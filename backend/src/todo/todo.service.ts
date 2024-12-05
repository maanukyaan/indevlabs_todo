import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  // Добавить задачу
  async addTodo(text: string): Promise<Todo> {
    const todo = this.todoRepository.create({ text });
    return this.todoRepository.save(todo);
  }

  // Получить все задачи
  async getTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  // Удалить задачу
  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

  // Обновить статус выполнения задачи
  async toggleComplete(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new Error('Task not found');
    }
    todo.completed = !todo.completed;
    return this.todoRepository.save(todo);
  }
}
