# To-Do test task

This is a simple To-Do List application that allows users to add tasks, view them, toggle their status (completed/not completed), and delete them. All data is stored in an SQLite database.

## Description

- **Backend**: Implemented using **NestJS**, **TypeORM**, and an **SQLite** database.
- **Frontend**: Built using **React**, **TypeScript**, and **TailwindCSS**.

## How to run

### 1. Clone the repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/maanukyaan/indevlabs_todo.git
cd indevlabs_todo
```

### 2. Install dependencies

Inside the project folder, install the necessary dependencies:

```bash
cd backend
npm install
```

### 3. Run the backend

After the dependencies are installed, start the server:

```bash
npm run start
```

The backend will now be available at `http://localhost:3000`. You can use **Postman**, **curl**, or any other API testing tool.

### 4. Test the API

The application provides several endpoints to work with tasks. You can test them using **Postman**, **curl**, or any other API testing tool.

#### Add a task

- **Request type**: `POST`
- **URL**: `http://localhost:3000/todos`
- **Request body (JSON)**:
  ```json
  {
    "text": "My new task"
  }
  ```

#### Get all tasks

- **Request type**: `GET`
- **URL**: `http://localhost:3000/todos`

#### Delete a task

- **Request type**: `DELETE`
- **URL**: `http://localhost:3000/todos/{id}`
  Replace `{id}` with the ID of the task you want to delete.

#### Toggle task status

- **Request type**: `POST`
- **URL**: `http://localhost:3000/todos/{id}/toggle`
  Replace `{id}` with the ID of the task whose status you want to toggle (completed/not completed).

### 5. Database

The application uses **SQLite** to store task data. The database file is located at `todo.db`.

## Project structure

### Backend (NestJS)

- **`src/todo`**: Contains files related to task operations (entities, services, and controllers).
- **`src/app.module.ts`**: Main module that imports other necessary modules.
- **`src/todo/todo.entity.ts`**: Task entity that represents the structure of task data in the database.
- **`src/todo/todo.service.ts`**: Service containing the logic for adding, deleting, and updating tasks.
- **`src/todo/todo.controller.ts`**: Controller that handles HTTP requests and calls service methods.

## Frontend

The application uses **React**, **TypeScript**, **TailwindCSS**, and **shadcn/ui** for the user interface.

### Components

1. **AddTodo**: A component for adding a new task to the list. It takes the task text and sends it to the server to be saved in the database.
2. **TodoList**: A component for displaying all tasks in the list. Each task can have its status toggled (completed/not completed) and be deleted.
3. **TodoItem**: Displays a single task with options to edit its status or delete it.

### How to run the frontend

1. Go to the frontend project folder:

   ```bash
   cd frontend
   ```

2. Install all dependencies:

   ```bash
   npm install
   ```

3. Run the frontend:

   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`.

### Interaction with the backend

The frontend sends HTTP requests to the backend to perform task operations. The following endpoints are used:

1. **Add a task**:

   - **Request type**: `POST`
   - **URL**: `http://localhost:3000/todos`
   - **Request body (JSON)**:
     ```json
     {
       "text": "New task"
     }
     ```

2. **Get all tasks**:

   - **Request type**: `GET`
   - **URL**: `http://localhost:3000/todos`

3. **Delete a task**:

   - **Request type**: `DELETE`
   - **URL**: `http://localhost:3000/todos/{id}`

4. **Toggle task status**:
   - **Request type**: `POST`
   - **URL**: `http://localhost:3000/todos/{id}/toggle`
