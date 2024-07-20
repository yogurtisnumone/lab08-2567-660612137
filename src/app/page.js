import Task from "./components/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";

export default function Home() {
  const tasks = [
    {id: 1, title: "Read a book", isDone: true },
    {id: 2, title: "Take a shower", isDone: false },
    {id: 3, title: "Sleep", isDone: false },
  ];
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>

        {/* task */}
        {tasks.map(task => (
          <Task key={task.id} title={task.title} isDone={task.isDone} />
        ))}

      </div>

      {/* //footer section */}
      <Footer year="2024" fullname = "Kachapat Punthong" studentId = "660612137"/>
    </div>
  );
}
