import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateBoard } from "./Popups";
import { Board } from "@/utils/data";
import { changeSelectedBoard } from "@/redux/boardSlice/boardSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  const { boards } = useSelector((state: RootState) => state.board);
  const { selectedBoard } = useSelector((state: RootState) => state.board);

  const [openBoard, setOpenBoard] = useState(false);
  return (
    <>
      {openBoard && <CreateBoard setOpenBoard={setOpenBoard} />}
      <div className="w-2/12 bg-gray-50  h-screen flex flex-col items-center gap-4 p-3 ">
        <h1 className="font-bold ">All Boards({boards.length})</h1>
        {boards.map((singleBoard) => (
          <h1
            key={singleBoard.boardId}
            className={`${
              singleBoard.boardId === selectedBoard
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-500"
            } w-4/5  p-3 font-bold transition-all rounded-md`}
            onClick={() => dispatch(changeSelectedBoard(singleBoard.boardId))}
          >
            {singleBoard.boardName}
          </h1>
        ))}

        <button
          className="p-3 rounded-lg bg-blue-400 hover:text-blue-400 hover:bg-white font-bold"
          onClick={() => setOpenBoard(true)}
        >
          Create New Board
        </button>
      </div>
    </>
  );
}
