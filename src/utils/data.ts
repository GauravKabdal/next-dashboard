export interface Subtask {
  subTaskid: number;
  subTaskName: string;
  completed: boolean;
}

export interface Task {
  id: number;
  taskName: string;
  taskDesc: string;
  subTasks: Subtask[];
  status: Status;
}

export interface Board {
  boardId: number;
  boardName: string;
  tasks: Task[];
}

export interface InitialState {
  boards: Board[];
  selectedBoard: number;
  activeTaskCard: number;
}

export type Status = "Todo" | "Doing" | "Done";
