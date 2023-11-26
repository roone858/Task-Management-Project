import { logout } from "../utils/auth";
import { getUserFromLocalStorage } from "../utils/localstorage";

const Header = () => {
  const username = getUserFromLocalStorage()?.username;
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex">
        <svg
          className="h-8 w-8 text-indigo-500 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h4 className="font-semibold ml-3 text-lg">
          {username ? username : ""}'s Jobs
        </h4>
      </div>
      <a className="hover:text-blue-700 cursor-pointer" onClick={logout}>Log out</a>
    </div>
  );
};

export default Header;
