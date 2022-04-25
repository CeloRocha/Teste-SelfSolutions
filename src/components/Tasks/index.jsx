import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Task from '../Task';
import './styles.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ChatIcon from '../Icons/ChatIcon';
const Tasks = () => {
    const { tasks, taskFunctions } = useContext(TaskContext);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        taskFunctions.dragAndDropUpdateState(result);
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
                <div className="notice">
                    <ChatIcon />
                    <h2 data-testid="No tasks" title="No tasks">
                        Ainda não há nenhuma tarefa.
                    </h2>
                    <p>
                        Anote suas tarefas para não se esquecer de cumpri-las.
                    </p>
                </div>
            )}
        </DragDropContext>
    );
};

export default Tasks;
