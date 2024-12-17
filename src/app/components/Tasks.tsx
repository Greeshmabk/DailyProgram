import TaskItem from "./TaskItem";
const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 p-6">Todo list</h1>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} >
            <TaskItem taskDetails={task}></TaskItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
