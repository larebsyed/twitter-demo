import { FaHome, FaTwitter, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const LeftSidebar = () => {
  const user = useUserContext();
  return (
    <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto">
      <FaTwitter className="h-12 w-12 text-white" />
      <nav className="mt-5 px-2">
        <NavLink
          to={`/${user.username}`}
          className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300"
        >
          <FaHome className="mr-4 h-6 w-6 text-white" />
          Home
        </NavLink>
        <NavLink
          to={`/profile/${user.username}`}
          className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
        >
          <FaUser className="mr-4 h-6 w-6 text-white" />
          Profile
        </NavLink>
        <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Tweet
        </button>
      </nav>
    </div>
  );
};
