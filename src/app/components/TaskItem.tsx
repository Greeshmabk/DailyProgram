const TaskItem = ({ taskDetails }) => {
  return (
    <div>
      <h3>
        {taskDetails.id}
        {taskDetails.title}
        {taskDetails.dueDate.toDateString()}
      </h3>
    </div>
  );
};

export default TaskItem;
