const TaskItem = ({ taskDetails }) => {
  return (
    <div className={`py-3 text-2xl ${
      taskDetails.remainingDays > 0 ? "text-blue-500" : "text-red-500"
    }`}>
      <div className="px-2 "><span className="font-bold">Task:</span>{taskDetails.title}</div>
      <div className="px-2"><span className="font-bold">Reamaining Days:</span> {taskDetails.remainingDays} days</div>
    </div>
  );
};

export default TaskItem;
