import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { create } from "domain";
import { Board, InitialState, Status, Subtask, Task } from "@/utils/data";
import { stat } from "fs";

const initialState: InitialState = {
  boards: [
    {
      boardId: 1,
      boardName: "initial Board",
      tasks: [
        {
          id: Date.now(),
          taskName: "First Task",
          taskDesc: "Description of task",
          status: "Todo",
          subTasks: [
            {
              subTaskid: Date.now(),
              subTaskName: "Name of subTask",
              completed: false,
            },
          ],
        },
      ],
    },
  ],
  selectedBoard: 1,
  activeTaskCard: 0,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
      console.log(action.payload, "payload add board");

      state.boards.push(action.payload);
    },
    changeSelectedBoard: (state, action: PayloadAction<number>) => {
      state.selectedBoard = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      // console.log(state.boards);
      // console.log(state.selectedBoard);
      console.log(action.payload, "boardslice");
      state.boards.map((singleBoard) => {
        if (singleBoard.boardId === state.selectedBoard) {
          singleBoard.tasks.push(action.payload);
        }
      });
    },
    changeTStatus: (
      state,
      action: PayloadAction<{ singleTask: Task; status: Status }>
    ) => {
      state.boards.map((singleBoard) => {
        console.log("came inside boards");
        if (singleBoard.boardId === state.selectedBoard) {
          singleBoard.tasks.map((singleTask) => {
            console.log("came inside singleboard");
            if (singleTask.id === action.payload.singleTask.id) {
              console.log("came inside if");
              singleTask.status = action.payload.status;
              console.log(singleTask.status);
            }
          });
        }
      });
    },
    deleteBoard: (state) => {
      state.boards = state.boards.filter(
        (board) => board.boardId !== state.selectedBoard
      );
      console.log(state.boards[0]);
      state.selectedBoard = state.boards[0] ? state.boards[0].boardId : 0;
      console.log(state.selectedBoard);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.boards.map((singleBoard) => {
        if (singleBoard.boardId === state.selectedBoard) {
          singleBoard.tasks = singleBoard.tasks.filter(
            (task) => task.id !== action.payload
          );
        }
      });
    },
    setActiveTaskCard: (state, action: PayloadAction<number>) => {
      state.activeTaskCard = action.payload;
    },
    changeStStatus: (
      state,
      action: PayloadAction<{ task: Task; bool: boolean; subtask: Subtask }>
    ) => {
      console.log("changing status");
      state.boards.map((singleBoard) =>
        singleBoard.tasks.map((singleTask) => {
          if (singleTask.id === action.payload.task.id) {
            singleTask.subTasks.map((singleSubTask) => {
              if (
                singleSubTask.subTaskName === action.payload.subtask.subTaskName
              ) {
                singleSubTask.completed = action.payload.bool;
              }
            });
          }
          // return singleTask; // Return the modified task
        })
      );
    },
  },
});

export const {
  addBoard,
  changeStStatus,
  changeSelectedBoard,
  addTask,
  deleteTask,
  changeTStatus,
  setActiveTaskCard,
  deleteBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
