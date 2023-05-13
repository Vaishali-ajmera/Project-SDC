import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4">
      <Link to={"/"} className="text-lg font-bold text-gray-800">
        SDC
      </Link>
      <nav className="space-x-4">
        <Link to={"/student-intake"} className="text-lg text-gray-600 hover:text-gray-800 hover:bg-gray-300 py-2 px-4 rounded-md">
          Student Intake
        </Link>
        <Link to={"/student-strength"} className="text-lg text-gray-600 hover:text-gray-800 hover:bg-gray-300 py-2 px-4 rounded-md">
          Student Strength
        </Link>
      </nav>
    </header>
  );
}
