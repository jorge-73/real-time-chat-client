import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    toast('Good Bye!', {
      icon: '👋',
    });

    setTimeout(() => {
      logout();
    }, 100);
  };

  useEffect(() => {}, [logout]);
  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer hover:text-gray-200 hover:scale-125 ease-in duration-300"
        onClick={handleLogout}
      />
    </div>
  );
};

export default LogoutButton;
