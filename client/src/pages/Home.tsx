import { useDispatch } from "react-redux";
import AddForm from "../Components/AddForm";
import Header from "../Components/Header";

import TaskList from "../Components/TaskList";
import { useEffect } from "react";
import { fetchTasks } from "../redux/slice/task-slice";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen font-medium">
        <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
          <div className=" p-8 bg-white rounded-lg shadow-lg min-w-[400px]">
            <Header />
            <TaskList />
            <AddForm />
          </div>
        </div>
      </div>
    </div>
  );
}
