"use client";

import { CreateBoard } from "@/components/Popups";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openBoard, setOpenBoard] = useState(false);

  const openCreateBoard = () => {
    setOpenBoard(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link href={"/dashboard"} className="hover:text-blue-500">
          Navigate to Dashboard
        </Link>
      </div>
    </>
  );
}
