import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useEffect } from "react";
import { useAddTask } from "./hooks/useAddTask";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");
  const { tasks, newTask, input, addTask, deleteTask, checkTask } = useAddTask();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Guardado en el almacenamiento:", tasks);
  }, [tasks]);

  return (
    <Box backgroundColor={formBackground} p={4}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <div className="todo-App">
        <h2>Todo App</h2>
        <TaskForm input={input} addTask={addTask} newTask={newTask} />
        <TaskList checkTask={checkTask} deleteTask={deleteTask} tasks={tasks} />
      </div>
    </Box>
  );
}

export default App;
