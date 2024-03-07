import React from 'react';
import { useDrop } from 'react-dnd';
import TaskItem from './TaskItem';

function TaskList({ status, tasks, updateTaskStatus }) {
    const [, drop] = useDrop({
        accept: 'TASK',
        drop: (item) => updateTaskStatus(item.id, status),
    });

    return (
        <div ref={drop} className="task-list">
            <h2>{status}</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;