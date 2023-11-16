import "../styles/task-item.css";

export const TaskItem = ({ task, deleteTask, checkTask }) => {
  console.log(task)
  const getStyle = () => {
    return {
      textDecoration: task.completed ? "line-through" : "none",
    };
  };


  //click input text y al volver a hacer click ejecutar funcion del hook 
  return (
    <div className="task-item" style={getStyle()}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => checkTask(task.id)}
      />
      {task.task}
      <button className="mod-btn"></button> 
      <button className="del-btn" onClick={()=>deleteTask(task.id)}></button>
    </div>
  );
};
