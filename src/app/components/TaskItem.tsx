const TaskItem = ({ taskDetails }) => {
  return (
    <span className="py-3 text-2xl">
      <span className="px-2">{taskDetails.title}</span>
    </span>
  );
};

export default TaskItem;
