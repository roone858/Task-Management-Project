import React from "react";
import taskService from "../services/tasks.service";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/slice/task-slice";
import { Task } from "../types/types";

const CheckBox = ({ task }:{task:Task}) => {
  const dispatch = useDispatch();
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
  };
  return (
    <input
      type="checkbox"
      onChange={handleCheckBoxChange}
      id={task.name}
      defaultChecked={task.isCompleted}
    />
  );
};

export default CheckBox;
