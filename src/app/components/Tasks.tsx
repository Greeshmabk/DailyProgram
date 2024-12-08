import TaskItem from "./TaskItem";
const Tasks = ({ tasks }) => {
  return (
    <div>
      <h2>Todo list</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem taskDetails={task}></TaskItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
