import { Task } from "../types/types";
import { logout } from "../utils/auth";
import { getTokenFromLocalStorage } from "../utils/localstorage";

class taskService {
  static async getTasks() {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      });
      if (response.status == 401) {
        logout();
      }
      const json = await response.json();
      return json;
    } catch (error) {
      localStorage.clear();

      console.log("error", error);
    }
  }
  static async getTasksForUser(id: string) {
    try {
      const response = await fetch("http://localhost:3000/tasks/user/" + id, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      });
      if (response.status == 401) {
        logout();
      }
      const json = await response.json();
      return json;
    } catch (error) {
      localStorage.clear();

      console.log("error", error);
    }
  }
  static async getTask(id: string) {
    try {
      const response = await fetch("http://localhost:3000/tasks/" + id, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      });
      if (response.status == 401) {
        logout();
      }
      const json = await response.json();
      return json;
    } catch (error) {
      localStorage.clear();

      console.log("error", error);
    }
  }
  static async insertTask(data: Task) {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (response.status == 401) {
        logout();
      }
      const json = await response.json();
      return json;
    } catch (error) {
      localStorage.clear();
      console.log("error", error);
    }
  }
  static async updateTask(id: string, data: Task) {
    try {
      const response = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (response.status == 401) {
        logout();
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async deleteTask(id: number) {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
    });
    if (response.status == 401) {
      logout();
    }
    // .then(result=>result.json()).then(data => data)
    // console.log(response)
    // return response;
  }
}
export default taskService;
