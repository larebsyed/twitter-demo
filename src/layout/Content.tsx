import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
      <Outlet />
    </div>
  );
};
