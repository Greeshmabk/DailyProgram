"use client";
import { useState } from "react";
import Tasks from "./components/Tasks";

export default function Home() {
  const daysRemaining=(expDay)=>{
    const currentDay=new Date()
    const differenceInMs = expDay.getTime() - currentDay.getTime();

    const remainingDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    return remainingDays
  }
  const [tasksList, setTaskList] = useState([
    {
      id: 1,
      title: "1st Task",
      dueDate: new Date("2024-12-03"),
      remainingDays: daysRemaining(new Date("2025-12-03"))
    },
    {
      id: 2,
      title: "Go Shopping",
      dueDate: new Date("2024-12-03"),
      remainingDays: daysRemaining(new Date("2024-12-03"))
    },
    {
      id: 3,
      title: "complete task",
      dueDate: new Date("2024-12-03"),
      remainingDays: daysRemaining(new Date("2024-12-03"))
    },
  ]);
  
  return (
    <div className="bg-red-100" style={{ textAlign: "center" }}>
      <h1 className="text-5xl font-bold text-green-500 p-6">Day Planning </h1>
      <Tasks tasks={tasksList}></Tasks>
    </div>
  );
}
