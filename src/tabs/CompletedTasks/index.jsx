import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContextProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const dropIn = {
    hiddenY: {
        y: '30px',
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
    hiddenLeft: {
        x: '-50px',
        opacity: 0,
    },
    hiddenRight: {
        x: '50px',
        opacity: 0,
    },
};

const CompletedTasks = (props) => {
    const { tasks } = useContext(TaskContext);

    const completedTasks = tasks.filter((task) => task.complete);

    return (
        <>
            <motion.h1 variants={dropIn} initial="hiddenLeft" animate="visible">
                Tarefas Completas
            </motion.h1>
            <motion.div
                variants={dropIn}
                initial="hiddenRight"
                animate="visible"
                style={{ width: '15rem', height: '15rem' }}
            >
                <CircularProgressbar
                    value={completedTasks.length}
                    maxValue={tasks.length}
                    text={`${completedTasks.length}/${tasks.length}`}
                    styles={buildStyles({
                        textColor: 'var(--text-color)',
                        pathColor: 'var(--text-color)',
                    })}
                />
            </motion.div>
            <div className="tasks">
                {completedTasks?.map((task, index) => {
                    return (
                        <motion.div
                            variants={dropIn}
                            initial="hiddenY"
                            animate="visible"
                            className="task complete"
                            key={index}
                        >
                            <div className="task-info">
                                <h2>{task.title}</h2>
                                <p>{task.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

CompletedTasks.propTypes = {};

export default CompletedTasks;
