import data from "../data.json";

//Constante con la que inicializar el estado de las tareas
export const initialData = () => {
    const localStorageData = localStorage.getItem("tasks");
    const storedTasks = JSON.parse(localStorageData);

    return storedTasks ? storedTasks : data;
};