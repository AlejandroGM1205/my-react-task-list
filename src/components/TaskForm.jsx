import "../styles/task-form.css";

export const TaskForm = ({input, addTask, newTask}) => {

  return (
    <div className="task-form-container">
      <div className="task-form">
        <input
          value={newTask}
          onChange={(e) => input(e)}
          className="task-input"
          type="text"
          placeholder="Add your new todo"
        />
        <button 
        className="task-button" 
        type="submit" 
        onClick={()=> addTask()}>
          <b>+</b>
        </button>
      </div>
    </div>
  );
};
