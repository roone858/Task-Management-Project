import { useSelector } from "react-redux";
import { State } from "../types/types";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state: State) => state.tasks.list);
  return (
    <div>
      {tasks.length && tasks.map((task, key: number) => (
        <TaskItem key={key} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
