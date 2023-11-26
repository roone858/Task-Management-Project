
export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  } else {
    return null;
  }
}

export function setTokenInLocalStorage(tokenValue: string) {
  localStorage.setItem("token", tokenValue);
}

export function setUserInLocalStorage(userObject: {
  username: string;
  userId: string;
}) {
  localStorage.setItem("user", JSON.stringify(userObject));
}

export function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}
