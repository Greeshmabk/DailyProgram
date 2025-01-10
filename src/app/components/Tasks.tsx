import { useState } from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks }) => {
  const [title, setTitle] = useState<string>("");
  const [newTaskList, setNewTaskList] = useState(tasks || []);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  function saveTitle() {
    let tasksObject = {
      title: title,
      dueDate: new Date("2024-12-03"),
    };
    setNewTaskList([...newTaskList, tasksObject]);
    setTitle("")
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
        <button
          type="button"
          className="rounded-none bg-sky-500 pl-4 font-bold"
          disabled={title==""}
          onClick={saveTitle}
        >
          Save
        </button>
      </form>
      <div className="flex justify-center">
        <ul className="list-disc list-inside text-left w-48">
          {newTaskList.map((task, index) => (
            <li key={index}>
              <TaskItem taskDetails={task}></TaskItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
