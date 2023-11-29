import { useDispatch } from "react-redux";
import { Task } from "../types/types";
import { removeTask, updateTask } from "../redux/slice/task-slice";
import taskService from "../services/tasks.service";
import { useState } from "react";
import CheckBox from "./CheckBox";
import UpdateForm from "./UpdateForm";

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [data, setData] = useState({
    name: task?.name,
    description: task?.description,
    dueDate: task?.dueDate,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleDelete = async () => {
    if (task.taskId) {
      await taskService.deleteTask(+task.taskId);
      dispatch(removeTask(task.taskId));
    }
  };
  const handleEdit = () => {
    editFlag && handleSave();
    setEditFlag(!editFlag);
  };

  const handleSave = async () => {
    const newTask = {
      ...task,
      ...data,
      dueDate: data.dueDate,
    };
    if (task.taskId) {
      const response = await taskService.updateTask(task.taskId, newTask);
      if (!response.message)
        return dispatch(
          updateTask({ taskId: task.taskId, task: newTask })
        );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
          htmlFor={task.name}
        >
          <CheckBox task={task} />
          <span
            className={
              task.isCompleted
                ? "ml-4 text-neutral-300 line-through text-base"
                : "ml-4 text-base"
            }
          >
            {task.name}
          </span>
        </label>
        <div className="flex">
          <button
            onClick={handleEdit}
            className="btn mx-2 text-xs bg-transparent hover:bg-green-500 h-7 text-green-700 font-semibold hover:text-white  px-2 border border-green-500 hover:border-transparent rounded"
          >
            {editFlag ? "Save" : "Edit"}
          </button>
          <button
            onClick={handleDelete}
            className="btn text-xs bg-transparent hover:bg-red-500 h-7 text-red-700 font-semibold hover:text-white  px-2 border border-red-500 hover:border-transparent rounded"
          >
            Delete
          </button>
        </div>
      </div>
      {editFlag && (
        <UpdateForm handleChangeInput={handleChangeInput} task={task} />
      )}
    </div>
  );
};

export default TaskItem;
