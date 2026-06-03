import Link from "next/link";

import { MdPerson } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { FaPersonWalking } from "react-icons/fa6";

export default function ProfileWidget() {
  return (
    <div className="absolute top-16 right-0 w-68 bg-white shadow-lg rounded-md p-4">
      <Link
        href="/profile"
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 py-4 rounded-md"
      >
        <MdPerson className="text-primary" />
        <span className="font-medium">Jonathan Joestar</span>
      </Link>

      <Link
        href="/cart"
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 py-4 rounded-md"
      >
        <BsFillCartFill className="text-primary" />
        <span className="font-medium">See Order</span>
      </Link>

      <Link
        href="/logout"
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 py-4 rounded-md"
      >
        <FaPersonWalking className="text-red-500" />
        <span className="font-medium">Logout</span>
      </Link>
    </div>
  );
}
