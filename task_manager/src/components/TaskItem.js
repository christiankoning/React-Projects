import React from 'react';
import { useDrag } from 'react-dnd';

function TaskItem({ task }) {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
        <li ref={drag} style={{ opacity }}>
            {task.name}
        </li>
    );
}

export default TaskItem;