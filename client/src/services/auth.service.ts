import { getTokenFromLocalStorage } from "../utils/localstorage";

class authService {
  static async login(data: { username: string; password: string }) {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromLocalStorage()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async signup(data: {
    username: string;
    password: string;
    email: string;
  }) {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/users/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getTokenFromLocalStorage()}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default authService;
