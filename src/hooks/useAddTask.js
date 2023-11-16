import { useState } from "react";
export const useAddTask = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
//F.actualizar (id, newText).. similar al checkTask
const updateTask = (id, text) => {
  const index = tasks.findIndex((e)=>e.id === id )
  const task = tasks.find((e)=>e.id === id )
  task.description = text
  tasks.splice(index,1, task)
  setTasks([...tasks])
}

//Funcion para checkear
  const checkTask = (id)=> {
    const index = tasks.findIndex((e)=>e.id === id )
    const task = tasks.find((e)=>e.id === id )
    task.completed = !task.completed
    tasks.splice(index,1, task)
    setTasks([...tasks])
  }
//Funcion para eliminar
  const deleteTask = (id) => {
    const index = tasks.findIndex((e)=>e.id === id )
    tasks.splice(index,1)
    setTasks([...tasks])
  }
  //Esto me trae lo que hay en el input
  const input = (e) => {
    setNewTask(e.target.value);
    console.log("Este es el input")
  };
  //Funcion para agregar tarea
  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      };
      console.log("Este es addtask")
      //Seteo mis tareas haciendo una copia de las tareas y agregandole la nueva tarea y reestablezo el campo vacio de mi input
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      console.log(tasks)
    }
  };

  return {
    newTask,
    input,
    addTask,
    deleteTask,
    checkTask,
    updateTask,
    tasks
  };
};
