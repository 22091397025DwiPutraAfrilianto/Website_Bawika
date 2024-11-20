import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useNavbar from "../hooks/useNavbar";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useNavbar();
  return (
    <nav className="my-16 bg-[#fee799] w-full p-4">
      <div className="container flex flex-row items-center justify-between mx-auto">
        <h1 className="relative">
          <Link className="absolute inset-0 m-auto w-36 h-36" to="/">
            <img src={logo} />
          </Link>
        </h1>
        <ul className="flex flex-row items-center md:gap-8 lg:gap-16">
          <li>
            <Link
              className={`flex flex-col font-semibold transition duration-300 ${
                pathname === "/"
                  ? "after:h-0.5 after:rounded-full after:bg-gray-600 text-gray-800 after:w-[calc(100%-10px)] after:mx-auto"
                  : "hover:text-gray-800 text-gray-600"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`flex flex-col font-semibold transition duration-300 ${
                pathname === "/pembelajaran"
                  ? "after:h-0.5 after:rounded-full after:bg-gray-600 text-gray-800 after:w-[calc(100%-10px)] after:mx-auto"
                  : "hover:text-gray-800 text-gray-600"
              }`}
              to="#"
            >
              Pembelajaran
            </Link>
          </li>
          <li>
            <Link
              className={`flex flex-col font-semibold transition duration-300 ${
                pathname === "/dongeng"
                  ? "after:h-0.5 after:rounded-full after:bg-gray-600 text-gray-800 after:w-[calc(100%-10px)] after:mx-auto"
                  : "hover:text-gray-800 text-gray-600"
              }`}
              to="#"
            >
              Dongeng
            </Link>
          </li>
          <li>
            <Link
              className={`flex flex-col font-semibold transition duration-300 ${
                pathname === "/event"
                  ? "after:h-0.5 after:rounded-full after:bg-gray-600 text-gray-800 after:w-[calc(100%-10px)] after:mx-auto"
                  : "hover:text-gray-800 text-gray-600"
              }`}
              to="/event"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              className={`flex flex-col font-semibold transition duration-300 ${
                pathname === "/kuis"
                  ? "after:h-0.5 after:rounded-full after:bg-gray-600 text-gray-800 after:w-[calc(100%-10px)] after:mx-auto"
                  : "hover:text-gray-800 text-gray-600"
              }`}
              to="#"
            >
              Kuis
            </Link>
          </li>
        </ul>
        <div>
          <Link className="font-semibold" to={"#"}>
            Login
            <FaUserAlt className="inline ml-3 -mt-1 text-current size-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
