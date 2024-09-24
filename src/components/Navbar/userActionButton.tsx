import { authUserSession } from "@/libs/authLibs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "api/auth/signout" : "api/auth/signin";

  console.log(user);

  return (
    <div>
      <Link href={actionURL} className="text-white">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
