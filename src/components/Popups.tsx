import {
  addBoard,
  addTask,
  changeStStatus,
  changeTStatus,
  deleteTask,
} from "@/redux/boardSlice/boardSlice";
import { RootState } from "@/redux/store";

import { Subtask, Task } from "@/utils/data";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function CreateBoard({
  setOpenBoard,
}: {
  setOpenBoard: (someVar: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState("");
  const [totalColumns, setTotalColumns] = useState(["Todo", "Doing"]);
  const handleAddCol = () => {
    setTotalColumns([...totalColumns, "Example task"]);
  };

  const handleDeleteTask = () => {
    const newArr = [...totalColumns];
    newArr.pop();
    setTotalColumns(newArr);
  };

  const handleClose = (e: any) => {
    if (e.target.id === "createBoard-container") setOpenBoard(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("dispathcing");
    dispatch(
      addBoard({
        boardId: Date.now(),
        boardName: boardName,
        tasks: [],
      })
    );
    setOpenBoard(false);
  };
  return (
    <div
      className="h-screen w-screen  flex items-center justify-center absolute backdrop-blur-sm"
      id="createBoard-container"
      onClick={handleClose}
    >
      <div className="bg-white rounded-lg p-5 flex flex-col gap-2 shadow-sm border-2">
        <h1>Add Board</h1>
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="boardname">Board Name</label>
          <input
            id="boardname"
            className="block border-2 p-2 text-lg"
            placeholder="eg.Web Design"
            onChange={(e) => setBoardName(e.target.value)}
            required
          />
          <label htmlFor="columns">Board columns</label>
          {totalColumns.map((singleCol) => (
            <div>
              <input
                type="text"
                className="border-2 p-2"
                placeholder={singleCol}
                defaultValue={singleCol}
              />
              <button type="button" onClick={handleDeleteTask}>
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 p-3 rounded-lg"
            onClick={handleAddCol}
          >
            Add New Column
          </button>

          <button className="p-3 rounded-lg bg-blue-400">Save</button>
        </form>
      </div>
    </div>
  );
}

// export function AddTask({
//   setAddTask,
// }: {
//   setAddTask: (someVar: boolean) => void;
// }) {
//   const dispatch = useDispatch();
//   const [totalTasks, setTotalTasks] = useState<Subtask[]>([
//     { subTaskid: Date.now(), subTaskName: "Example name", completed: false },
//     { subTaskid: Date.now(), subTaskName: "Example2 name", completed: false },
//   ]);

//   const [formData, setFormData] = useState<Task>({
//     id: Date.now(),
//     taskName: "",
//     status: "Todo",
//     taskDesc: "",
//     subTasks: [],
//   });
//   const handleAddTask = () => {
//     setTotalTasks([
//       ...totalTasks,
//       { subTaskid: Date.now(), subTaskName: "Example name", completed: false },
//     ]);
//   };

//   const handleDeleteTask = () => {
//     const newArr = [...totalTasks];
//     newArr.pop();
//     setTotalTasks(newArr);
//   };

//   const handleClose = (e: any) => {
//     if (e.target.id === "forModal") setAddTask(false);
//   };

//   const handleFormChange = (e: any) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     console.log(formData);
//   };

//   const [subTaskData, setSubTaskData] = useState<Subtask>({
//     subTaskid: Date.now(),
//     subTaskName: "",
//     completed: false,
//   });
//   const [stArr, setStArr] = useState<Subtask[]>([]);

//   const handleSubTask = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSubTaskData({
//       ...subTaskData,
//       subTaskid: Date.now(),
//       subTaskName: e.target.value,
//       completed: false,
//     });
//     setStArr([...stArr, subTaskData]);
//   };

//   const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     const data = { ...formData, subTasks: stArr };
//     e.preventDefault();
//     dispatch(addTask(data));
//     setAddTask(false);
//   };

//   const getData = useSelector((state: RootState) => state.board);
//   console.log(getData, "data from state board");

//   return (
//     <div
//       className="h-screen w-screen flex items-center justify-center absolute backdrop-blur-sm"
//       id="forModal"
//       onClick={(e) => handleClose(e)}
//     >
//       <div className="bg-white rounded-lg p-5 flex flex-col gap-2 shadow-sm border-2">
//         <h1>Add New Task</h1>
//         <form
//           className="flex flex-col gap-2"
//           onSubmit={(e) => handleTaskSubmit(e)}
//         >
//           <label htmlFor="taskname">Task Name</label>
//           <input
//             id="taskName"
//             className="block border-2 p-2 text-lg"
//             placeholder="eg.Take coffee break"
//             onChange={(e) => handleFormChange(e)}
//             required
//           />
//           <label htmlFor="taskDesc">Description</label>
//           <textarea
//             name="taskDesc"
//             id="taskDesc"
//             className="h-36 border-2"
//             onChange={(e) => handleFormChange(e)}
//             required
//           />
//           <label htmlFor="columns">Subtasks</label>
//           {totalTasks.length ? (
//             totalTasks.map((singleTask) => (
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   className="border-2 p-2"
//                   placeholder={singleTask.subTaskName}
//                   required
//                   id={singleTask.subTaskid.toString()}
//                   onChange={(e) => handleSubTask(e)}
//                 />
//                 <button type="button" onClick={handleDeleteTask}>
//                   X
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No Subtasks!!</p>
//           )}
//           <button
//             type="button"
//             className="bg-blue-500 p-3 rounded-lg"
//             onClick={handleAddTask}
//           >
//             Add New Subtask
//           </button>
//           <button className="p-3 rounded-lg bg-blue-400">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// }

export function EditTask({
  singleTask,
  setOpenTask,
}: {
  singleTask: Task;
  setOpenTask: (someVar: boolean) => void;
}) {
  const dispatch = useDispatch();

  const handleClose = (e: any) => {
    if (e.target.id === "forModal") setOpenTask(false);
  };

  // const handleCheckChange = (e: any) => {
  //   console.log("reached check change");
  //   console.log(e.target.checked);
  //   dispatch(
  //     changeStStatus({
  //       task: singleTask,
  //       bool: e.target.checked,
  //       subtask: singleSubTask,
  //     })
  //   );
  // };

  const handleDeleteTask = () => {
    dispatch(deleteTask(singleTask.id));
    setOpenTask(false);
  };

  const handleTaskStatusChange = (e: any) => {
    console.log(e.target.value);
    const data = { singleTask, status: e.target.value };
    console.log(data);
    dispatch(changeTStatus(data));
  };
  return (
    <div
      className="h-screen w-screen flex items-center justify-center absolute backdrop-blur-sm"
      id="forModal"
      onClick={(e) => handleClose(e)}
    >
      <div className="bg-white rounded-lg p-5 flex flex-col gap-2 shadow-sm border-2">
        <div className="flex gap-5">
          <h1 className="font-bold text-3xl">{singleTask.taskName}</h1>
          <button
            className="bg-red-400 text-white p-3 rounded-lg font-bold hover:text-red-400 hover:bg-white hover:border-black hover:border"
            onClick={handleDeleteTask}
          >
            Delete Task
          </button>
        </div>
        <p>{singleTask.taskDesc}</p>
        {singleTask.subTasks.map((singleSubTask: Subtask) => (
          <div className="flex gap-3 ">
            <input
              type="checkbox"
              checked={singleSubTask.completed}
              onChange={(e) => {
                dispatch(
                  changeStStatus({
                    task: singleTask,
                    bool: e.target.checked,
                    subtask: singleSubTask,
                  })
                );
              }}
            />
            <label
              htmlFor=""
              className={`${
                singleSubTask.completed ? "line-through" : ""
              } bg-blue-900 text-white p-3 rounded-lg`}
            >
              {singleSubTask.subTaskName}
            </label>
          </div>
        ))}
        <h3>Task Status</h3>
        <select
          name="taskStatus"
          id=""
          onChange={(e) => handleTaskStatusChange(e)}
          defaultValue={singleTask.status}
          className="p-3"
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
}

export function AddTask({
  setAddTask,
}: {
  setAddTask: (someVar: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [totalTasks, setTotalTasks] = useState<Subtask[]>([
    { subTaskid: Date.now(), subTaskName: "Example name", completed: false },
    { subTaskid: Date.now(), subTaskName: "Example2 name", completed: false },
  ]);

  const [formData, setFormData] = useState<Task>({
    id: Date.now(),
    taskName: "",
    status: "Todo",
    taskDesc: "",
    subTasks: [],
  });

  const [subTaskInput, setSubTaskInput] = useState<string>("");
  const [stArr, setStArr] = useState<Subtask[]>([]);

  const handleAddTask = () => {
    setTotalTasks([
      ...totalTasks,
      { subTaskid: Date.now(), subTaskName: "Example name", completed: false },
    ]);
  };

  const handleDeleteTask = () => {
    const newArr = [...totalTasks];
    newArr.pop();
    setTotalTasks(newArr);
  };

  const handleClose = (e: any) => {
    if (e.target.id === "forModal") setAddTask(false);
  };

  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubTaskInput(e.target.value);
  };

  const handleAddSubTask = () => {
    if (subTaskInput) {
      const newSubTask: Subtask = {
        subTaskid: Date.now(),
        subTaskName: subTaskInput,
        completed: false,
      };
      setStArr([...stArr, newSubTask]);
      setSubTaskInput(""); // Clear input after adding
    }
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...formData, subTasks: stArr };
    dispatch(addTask(data));
    setAddTask(false);
  };

  const getData = useSelector((state: RootState) => state.board);
  console.log(getData, "data from state board");

  return (
    <div
      className="h-screen w-screen flex items-center justify-center absolute backdrop-blur-sm"
      id="forModal"
      onClick={(e) => handleClose(e)}
    >
      <div className="bg-white rounded-lg p-5 flex flex-col gap-2 shadow-sm border-2">
        <h1>Add New Task</h1>
        <form className="flex flex-col gap-2" onSubmit={handleTaskSubmit}>
          <label htmlFor="taskname">Task Name</label>
          <input
            id="taskName"
            className="block border-2 p-2 text-lg"
            placeholder="eg. Take coffee break"
            onChange={handleFormChange}
            required
          />
          <label htmlFor="taskDesc">Description</label>
          <textarea
            name="taskDesc"
            id="taskDesc"
            className="h-36 border-2"
            onChange={handleFormChange}
            required
          />
          <label htmlFor="columns">Subtasks</label>
          {stArr.length ? (
            stArr.map((singleTask: Subtask) => (
              <div key={singleTask.subTaskid} className="flex gap-2">
                <input
                  type="text"
                  className="border-2 p-2"
                  value={singleTask.subTaskName}
                  readOnly
                />
                <button type="button" onClick={handleDeleteTask}>
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No Subtasks!!</p>
          )}
          <div className="flex gap-2">
            <input
              type="text"
              className="border-2 p-2"
              placeholder="New Subtask"
              value={subTaskInput}
              onChange={handleSubTaskChange}
            />
            <button type="button" onClick={handleAddSubTask}>
              Add
            </button>
          </div>
          <button className="p-3 rounded-lg bg-blue-400">Save</button>
        </form>
      </div>
    </div>
  );
}
