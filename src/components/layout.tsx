import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f3f6ff]">
      <Navbar />
      <div className="flex min-h-[calc(100vh-128px)] w-full items-center justify-center p-5">
        <Outlet />
      </div>
      <footer className="flex h-16 w-full items-center justify-center text-[10px] text-gray-500">
        <p>&copy; 2025 All Rights Reserved by EstimAitor | Privacy Policy</p>
      </footer>
    </div>
  );
};

export default Layout;
