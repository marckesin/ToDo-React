import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    console.log(id);

    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton taskType="All" />
        <FilterButton taskType="Active" />
        <FilterButton taskType="Completed" />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((item) => {
          return <Todo
            id={item.id}
            name={item.name}
            completed={item.completed} key={item.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
          />
        })}
      </ul>
    </div>
  );
}

export default App;
