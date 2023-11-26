import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import { getTokenFromLocalStorage } from "./utils/localstorage";

const App = () => {
  const isLoggedIn = getTokenFromLocalStorage();

  if (!isLoggedIn)
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
