import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./userActionButton";
import DropdownUser from "./DropdownUser";
import { authUserSession } from "@/libs/authLibs";
import RouterBack from "../Router/Back";

async function Navbar() {
  const user = await authUserSession();

  return (
    <div className="border-b-1 border-gray-800 py-3 mb-4 relative">
      <RouterBack />
      <div className="flex justify-between items-center mx-4 sm:mx-8 md:mx12 lg:mx-24">
        <Link href={"/"} className="text-white text-xl font-bold">
          NobarCuy
        </Link>
        <div className="flex gap-8 items-center">
          <InputSearch />
          {user ? <DropdownUser avaImg={user?.image} /> : <UserActionButton />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
