import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Students", icon: Users, path: "/students" },
    { name: "Resources", icon: BookOpen, path: "/resources" },
  ];

  return (
    <aside className="w-60 bg-white border-r border-gray-200 p-4 space-y-6">
      <div className="text-lg font-semibold px-2 text-gray-800">
        Stay the Course
      </div>

      <nav className="space-y-2">
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Icon size={20} />
            <span className="font-medium">{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
