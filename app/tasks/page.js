import Navbar from "../../components/Navbar";

export default function Tasks() {
  const tasks = [
    "Complete Next.js Tutorial",
    "Read Software Engineering Notes",
    "Practice Git Commands",
    "Prepare Assignment",
    "Prepare for Exam"
  ];

  return (
    <>
      <Navbar />

      <h1>Study Tasks</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}