"use client";

import { ReactNode, useState } from "react";
import { AddTask } from "@/components/Popups";
import SideBar from "@/components/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Navbar from "@/components/Navbar";
export default function Layout({ children }: { children: ReactNode }) {
  const [addTask, setAddTask] = useState(false);

  return (
    <div>
      {addTask && <AddTask setAddTask={setAddTask} />}
      <Navbar setAddTask={setAddTask} />
      {children}
    </div>
  );
}
