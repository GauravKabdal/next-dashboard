import { deleteBoard } from "@/redux/boardSlice/boardSlice";
import { useDispatch } from "react-redux";

export default function Navbar({
  setAddTask,
}: {
  setAddTask: (someVar: boolean) => void;
}) {
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between p-3">
      <h1>Dashboard Project</h1>
      <div className="flex gap-3">
        <button
          className="bg-blue-500 rounded-lg p-3 text-white hover:text-blue-500 hover:bg-blue-100 hover:scale-110 hover:font-bold"
          onClick={() => setAddTask(true)}
        >
          Add New Task
        </button>
        <button
          className="bg-red-500 rounded-lg p-3 text-white hover:bg-red-100 hover:text-red-500 hover:scale-110 hover:font-bold"
          onClick={() => dispatch(deleteBoard())}
        >
          Delete Board
        </button>
      </div>
    </nav>
  );
}
