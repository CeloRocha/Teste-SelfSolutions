import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Task from '../Task';
import './styles.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = () => {
    const { tasks } = useContext(TaskContext);

    const handleOnDragEnd = (result) => {
        return;
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div
                        className="tasks"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks?.length > 0 &&
                            tasks.map((task, index) => {
                                return (
                                    <Draggable
                                        key={task.title + task.description}
                                        draggableId={
                                            task.title + task.description
                                        }
                                        index={index}
                                    >
                                        {(provided) => (
                                            <Task
                                                {...task}
                                                id={index}
                                                drag={provided.draggableProps}
                                                dragHandle={
                                                    provided.dragHandleProps
                                                }
                                                passRef={provided.innerRef}
                                            />
                                        )}
                                    </Draggable>
                                );
                            })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            {tasks?.length <= 0 && (
                <h2 data-testid="No tasks" title="No tasks">
                    Ainda não há nenhuma tarefa.
                </h2>
            )}
        </DragDropContext>
    );
};

export default Tasks;
