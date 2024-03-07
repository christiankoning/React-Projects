import React, { useState } from 'react';
import "./css/App.css";
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName) => {
        const newTask = { id: Date.now(), name: taskName, status: 'Backlog' };
        setTasks([...tasks, newTask]);
    };

    const updateTaskStatus = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <DndProvider backend={HTML5Backend}>
        <div className="mainContainer">

            <div className="headerContainer">
                <h1>Task Manager</h1>
            </div>

            <div className="bodyContainer">
                <TaskInput onAddTask={addTask} />
                <TaskList
                    status="Backlog"
                    tasks={tasks.filter(task => task.status === 'Backlog')}
                    updateTaskStatus={updateTaskStatus}
                />
                <TaskList
                    status="To Do"
                    tasks={tasks.filter(task => task.status === 'To Do')}
                    updateTaskStatus={updateTaskStatus}
                />
                <TaskList
                    status="Doing"
                    tasks={tasks.filter(task => task.status === 'Doing')}
                    updateTaskStatus={updateTaskStatus}
                />
                <TaskList
                    status="Done"
                    tasks={tasks.filter(task => task.status === 'Done')}
                    updateTaskStatus={updateTaskStatus}
                />
            </div>
        </div>
        </DndProvider>
    );
}

export default App;
