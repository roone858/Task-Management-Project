import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/task-slice";
import { useState } from "react";
import taskService from "../services/tasks.service";
import { getUserFromLocalStorage } from "../utils/localstorage";

const AddForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: "", description: "", dueData: "" });
  const [err, setErr] = useState("");
  const handleAdd = async () => {
    console.log(data);
    const userID = getUserFromLocalStorage().userId;
    const newTask = await taskService.insertTask({
      userId: userID,
      name: data.name,
      description: data.description,
      dueDate: new Date(data.dueData),
      isCompleted: false,
    });
    console.log(newTask);
    if (newTask.statusCode == 500) {
      return setErr(newTask.message);
    }
    dispatch(addTask(newTask));
    setErr("")
  };
  return (
    <div>
      {err && (
        <div role="alert " className="mt-8">
          <div className="border  border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{err}</p>
          </div>
        </div>
      )}
      <div className="flex items-center w-full mt-12">
        <button
          onClick={handleAdd}
          className="flex h-8 w-8 justify-center items-center rounded-full bg-slate-300   text-sm font-medium rounded"
        >
          <svg
            className="w-5 h-5 text-gray-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="name"
          className="flex-grow mb-4 px-2  h-8 ml-4 border focus:outline-none font-medium"
          type="text"
          placeholder="add a new task"
        />{" "}
      </div>

      <input
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
        className=" ml-12 mb-4 px-2   flex-grow h-8  border focus:outline-none font-medium"
        type="text"
        name="description"
        placeholder="add description for"
      />
      <input
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
        className="block ml-12 mb-4 px-2   flex-grow h-8  border focus:outline-none font-medium"
        type="date"
        name="dueDate"
        placeholder="add description for"
      />
    </div>
  );
};

export default AddForm;
