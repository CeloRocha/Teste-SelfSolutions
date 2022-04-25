import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContextProvider';
import Button from '../../components/Button';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import AwardIcon from '../../components/Icons/AwardIcon';

const dropIn = {
    hiddenLeft: {
        x: '-50px',
        opacity: 0,
    },
    hiddenRight: {
        x: '50px',
        opacity: 0,
    },
    visible: {
        x: '0',
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    hiddenY: {
        y: '30px',
        opacity: 0,
    },
};
const IncompleteTasks = (props) => {
    const { tasks, taskFunctions } = useContext(TaskContext);
    const { completeTask } = taskFunctions;
    const incompletedTasks = tasks
        .map((task, index) => ({ ...task, index: index }))
        .filter((task) => !task.complete);

    return (
        <>
            <motion.h1
                variants={dropIn}
                initial="hiddenRight"
                animate="visible"
            >
                Tarefas para Completar
            </motion.h1>
            <motion.div
                variants={dropIn}
                initial="hiddenLeft"
                animate="visible"
                style={{ width: '15rem', height: '15rem' }}
            >
                <CircularProgressbar
                    value={tasks.length - incompletedTasks.length}
                    maxValue={tasks.length}
                    text={`${tasks.length - incompletedTasks.length}/${
                        tasks.length
                    }`}
                    styles={buildStyles({
                        textColor: 'var(--text-color)',
                        pathColor: 'var(--text-color)',
                    })}
                />
            </motion.div>
            <div className="tasks">
                {incompletedTasks?.map((task) => {
                    return (
                        <motion.div
                            variants={dropIn}
                            initial="hiddenY"
                            animate="visible"
                            className="task"
                            key={task.index}
                        >
                            <div className="task-info">
                                <h2>{task.title}</h2>
                                <p>{task.description}</p>
                            </div>
                            <div className="task-buttons">
                                <Button
                                    type="check"
                                    onClick={() => completeTask(task.index)}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            {incompletedTasks.length === 0 && (
                <div className="notice">
                    <AwardIcon />
                    <h2>Parabéns!!!</h2>
                    <p>
                        Você completou TODAS suas tarefas. Agora tire um
                        descanso merecido.
                    </p>
                </div>
            )}
        </>
    );
};

IncompleteTasks.propTypes = {};

export default IncompleteTasks;
