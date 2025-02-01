import { useState } from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks }) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [newTaskList, setNewTaskList] = useState(tasks || []);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const daysRemaining = (expDay) => {
    const currentDay = new Date();
    const differenceInMs = expDay.getTime() - currentDay.getTime();

    const remainingDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    return remainingDays;
  };
  function saveTitle() {
    let tasksObject = {
      title: title,
      dueDate: new Date(date),
      remainingDays: daysRemaining(new Date(date)),
    };
    setNewTaskList([...newTaskList, tasksObject]);
    console.log(newTaskList);
    setTitle("");
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 p-6">Todo list</h1>
      <form>
        <label className="text-2xl font-bold p-3">Task Title: </label>
        <input
          className="pl-5 pr-5"
          type="text"
          value={title}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="date-picker">Due Date:</label>
        <input type="date" value={date} onChange={handleDateChange} />
        <button
          type="button"
          className="rounded-none bg-sky-500 pl-4 font-bold"
          disabled={title == ""}
          onClick={saveTitle}
        >
          Save
        </button>
      </form>
      <div className="flex justify-center">
        <ul className=" p-4 list-inside text-left ">
          {newTaskList.map((task, index) => (
            <li className="box-content h-32 w-64 p-4 border-4 bg-white" key={index}>
              <TaskItem taskDetails={task}></TaskItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
