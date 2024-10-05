"use client";

import SideBar from "@/components/SideBar";
import TaskCard from "@/components/TaskCard";
import { setActiveTaskCard } from "@/redux/boardSlice/boardSlice";
import { RootState } from "@/redux/store";
import { Board, Task } from "@/utils/data";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const { boards, selectedBoard, activeTaskCard } = useSelector(
    (state: RootState) => state.board
  );

  // const { selectedBoard } = useSelector((state: RootState) => state.board);
  const statusArr = ["Todo", "Doing", "Done"];
  const statusCounts = useState({ Todo: 0, Doing: 0, Done: 0 });
  console.log(Array.isArray(selectedBoard));
  console.log(boards, "boards");

  const handleTaskDrop = () => {};
  return (
    <div className="flex">
      <SideBar />
      <div className="bg-blue-100 w-screen overflow-x-scroll flex">
        {statusArr.map((singleStatus) => (
          <div
            key={singleStatus}
            className="w-1/4 flex flex-col items-center gap-3"
            onDrop={handleTaskDrop}
          >
            <h1>{singleStatus}</h1>

            {boards.map((singleBoard) => {
              if (singleBoard.boardId === selectedBoard) {
                return singleBoard.tasks.map((singleTask) =>
                  singleTask.status === singleStatus ? (
                    <>
                      <TaskCard key={singleTask.id} singleTask={singleTask} />
                    </>
                  ) : null
                );
              }
              return null; // Return null if the board doesn't match
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
