import React from "react";
import { Task } from "../types/types";

const UpdateForm = ({
  task,
  handleChangeInput,
}: {
  task: Task;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
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
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="date"
            name="dueDate"
            onChange={handleChangeInput}
            defaultValue={String(task?.dueDate)}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
