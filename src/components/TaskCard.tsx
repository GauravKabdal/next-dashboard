import { Task } from "@/utils/data";
import { useState } from "react";
import { EditTask } from "./Popups";
import { useDispatch } from "react-redux";
import { setActiveTaskCard } from "@/redux/boardSlice/boardSlice";

export default function TaskCard({ singleTask }: { singleTask: any }) {
  const [openTask, setOpenTask] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {openTask && (
        <EditTask singleTask={singleTask} setOpenTask={setOpenTask} />
      )}
      <div
        key={singleTask.id}
        className="bg-white text-blue-500 p-3 shadow-lg w-3/4 flex flex-col items-center text-lg font-bold active:opacity-90 cursor-grab"
        onClick={() => setOpenTask(true)}
        draggable
        onDragStart={() => dispatch(setActiveTaskCard(singleTask.id))}
        onDragEnd={() => dispatch(setActiveTaskCard(0))}
      >
        <h1>{singleTask.taskName}</h1>
        <h3># {singleTask.id}</h3>
      </div>
    </>
  );
}
