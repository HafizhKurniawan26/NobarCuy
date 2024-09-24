import React from "react";
import { authUserSession } from "@/libs/authLibs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <div className="mx-4 sm:mx-8 md:mx12 lg:mx-24 mb-40">
      <div className="flex items-center justify-center flex-col">
        <div>
          <h5 className="text-white mt-4 mb-2 text-lg">
            Welcome, {user?.name ?? "Guest"}
          </h5>
          <Image
            alt={user?.name ?? "Unknown User"}
            src={user?.image ?? "https://placehold.co/600x400.png"}
            height={250}
            width={250}
            className="rounded-xl"
          />
        </div>
        <div className="flex gap-4 mt-8">
          <Link
            href="/users/dashboard/collections"
            className="text-white bg-slate-800 rounded-lg py-1 px-3"
          >
            Collections
          </Link>
          <Link
            href="/users/dashboard/comments"
            className="text-white bg-slate-800 rounded-lg py-1 px-3"
          >
            Comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
