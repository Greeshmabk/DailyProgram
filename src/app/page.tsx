import Tasks from "./components/Tasks";


export default function Home() {
  let tasksList = [
    {
      id: 1,
      title: "1st Task",
      dueDate: new Date("2024-12-03")
    },
    {
      id: 2,
      title: "Go Shopping",
      dueDate: new Date("2024-12-03")
    },
    {
      id: 3,
      title: "complete task",
      dueDate: new Date("2024-12-03")
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Day Planning </h1>
      <Tasks tasks={tasksList}></Tasks>
    </div>
  );
}
