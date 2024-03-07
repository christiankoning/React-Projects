import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName.trim()) {
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2>Create Task</h2>
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;