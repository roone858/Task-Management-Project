import { useDispatch } from "react-redux";
import { Task } from "../types/types";
import { removeTask, toggleTask, updateTask } from "../redux/slice/task-slice";
import taskService from "../services/tasks.service";
import React, { useState } from "react";

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [data, setData] = useState({ name: task?.name, description: task?.description, dueDate: task?.dueDate });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [style, setStyle] = useState(
    task.isCompleted
      ? "ml-4 text-neutral-300 line-through text-sm"
      : "ml-4 text-sm"
  );
  const handleDelete = async () => {
    if (task.taskId) {
      await taskService.deleteTask(+task.taskId);
      dispatch(removeTask(task.taskId));
    }
  };
  const handleSave = async () => {
    const newTask ={
      ...task,
      ...data,
      dueDate: new Date(data.dueDate),
    }
    if (task.taskId) {
      const response = await taskService.updateTask(task.taskId, newTask);
      if (!response.message)
        return dispatch(updateTask({ taskId: task.taskId, task: newTask }));
    }
    console.log(data)
  };
  const handleCheckBoxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (task.taskId) {
      await taskService.updateTask(String(task.taskId), {
        ...task,
        isCompleted: e.target.checked,
      });
      dispatch(toggleTask(task.taskId));
    }

    e.target.checked
      ? setStyle("ml-4 text-neutral-300 line-through text-sm")
      : setStyle("ml-4 text-sm");
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
          htmlFor={task.name}
        >
          <input
            type="checkbox"
            onChange={handleCheckBoxChange}
            id={task.name}
            defaultChecked={task.isCompleted}
          />

          <span className={style}>{task.name}</span>
        </label>
        <div className="flex">
          <button
            onClick={() => {
              editFlag && handleSave();
              setEditFlag(!editFlag);
            }}
            className="btn text-xs bg-transparent hover:bg-green-500 h-7 text-green-700 font-semibold hover:text-white  px-2 border border-green-500 hover:border-transparent rounded"
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
        <>
          <div>
            <div className="w-full px-3 pb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChangeInput}
                defaultValue={task?.name}
              />
            </div>
            <div className="w-full px-3 pb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChangeInput}
                defaultValue={task?.description}
              />
            </div>
            <div className="w-full px-3 pb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Due Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                name="dueDate"
                onChange={handleChangeInput}
                defaultValue={String(task?.dueDate)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
